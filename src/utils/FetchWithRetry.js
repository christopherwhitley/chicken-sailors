export async function fetchWithRetry(fn, retries = 3, delay = 1000) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      console.log(`Attempt ${attempt + 1} of ${retries + 1}`);
      return await fn();
    } catch (error) {
      console.warn(`Attempt ${attempt + 1} failed: ${error.message}`);
      if (attempt === retries) {
        throw error;
      }
      await new Promise((res) => setTimeout(res, delay));
    }
  }
}
