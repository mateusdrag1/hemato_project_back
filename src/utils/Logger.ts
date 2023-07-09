function log(message: string): void {
  console.log('✅ ' + message);
}

function error(message: string): void {
  console.error('❌ ' + message);
}

function warn(message: string): void {
  console.warn('⚠️ ' + message);
}

export { log, error, warn };
