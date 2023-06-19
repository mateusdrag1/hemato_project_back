import { Request, Response } from 'express';
import { BaseController } from './controller';
import prisma from '../../database/PrismaClient';

export class PatientController implements BaseController {
	async index(req: Request, res: Response) {
		try {
			const patients = await prisma.patients.findMany({
				include: {
					erythrocyte: true,
					leukocyte: true,
					platelets: true,
				},
			});

			const formattedPatients = patients.map((patient) => {
				return {
					...patient,
					created_at: patient.createdAt,
					updated_at: patient.updatedAt,
				};
			});

			res.json({
				patients: formattedPatients,
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	async show(req: Request, res: Response) {
		const { id } = req.params;
		try {
			const patient = await prisma.patients.findUnique({
				where: {
					id: parseInt(id),
				},
			});
			res.json({
				patient,
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
	async store(req: Request, res: Response) {
		const { blade, age, genre } = req.body;

		const dateNow = new Date().toISOString().slice(0, 10).replace(/-/g, '');
		const bladeId = blade.toString().padStart(4, '0');

		const bladeFormatted = `${dateNow}${bladeId}`;

		if (!blade || !age || !genre) {
			return res.status(400).json({ error: 'Missing fields' });
		}

		try {
			const patientExists = await prisma.patients.findFirst({
				where: {
					blade: bladeFormatted,
				},
			});

			if (patientExists) {
				return res.status(400).json({ error: 'Patient already exists' });
			}

			const patient = await prisma.patients.create({
				data: {
					blade: bladeFormatted,
					age: parseInt(age),
					genre,
				},
			});
			res.json({
				patient: {
					id: patient.id,
					blade: patient.blade,
					age: patient.age,
					genre: patient.genre,
					created_at: patient.createdAt,
					updated_at: patient.updatedAt,
				},
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
	async update(req: Request, res: Response) {
		const { id } = req.params;
		const { blade, age, genre } = req.body;

		const dateNow = new Date().toISOString().slice(0, 10).replace(/-/g, '');
		const bladeId = blade.toString().padStart(4, '0');

		const bladeFormatted = `${dateNow}${bladeId}`;

		if (!blade || !age || !genre) {
			return res.status(400).json({ error: 'Missing fields' });
		}

		try {
			const patient = await prisma.patients.update({
				where: {
					id: parseInt(id),
				},
				data: {
					blade: bladeFormatted,
					age: parseInt(age),
					genre,
				},
			});
			res.json({
				patient,
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
	async delete(req: Request, res: Response) {
		const { id } = req.params;

		try {
			const patient = await prisma.patients.delete({
				where: {
					id: parseInt(id),
				},
			});
			res.json({
				patient,
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	async saveErythrocyte(req: Request, res: Response) {
		const { id } = req.params;
		const { erythrocyte, hemoglobin, hematocrit, rdw } = req.body;

		try {
			const erythrocyteDB = await prisma.erythrocyte.create({
				data: {
					erythrocyte,
					hemoglobin,
					hematocrit,
					RDW: rdw,
					patientId: parseInt(id),
				},
			});

			res.json({
				erythrocyteDB,
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	async saveLeukocyte(req: Request, res: Response) {
		const { id } = req.params;
		const {
			leukocyte,
			neutrophil,
			bandNeutrophils,
			lymphocyte,
			monocyte,
			eosinophil,
			basophil,
		} = req.body;

		try {
			const leukocyteDB = await prisma.leukocyte.create({
				data: {
					leukocyte,
					neutrophils: neutrophil,
					bandNeutrophils,
					lymphocytes: lymphocyte,
					monocytes: monocyte,
					eosinophils: eosinophil,
					basophils: basophil,
					patientId: parseInt(id),
				},
			});

			res.json({
				leukocyteDB,
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Internal server error' });
		}
	}

	async savePlatelet(req: Request, res: Response) {
		const { id } = req.params;
		const { platelets } = req.body;

		try {
			const plateletDB = await prisma.platelets.create({
				data: {
					platelets,
					patientId: parseInt(id),
				},
			});

			res.json({
				plateletDB,
			});
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}
