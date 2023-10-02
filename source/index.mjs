// helloWorld
import helloWorld from './helloWorld.mjs';

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages(); // Panggil function messages di luar blok kode function messages yang sudah dibuat

// ambilDataUser
import ambilDataUser from './ambilDataUser.mjs';

ambilDataUser();

// ambilDataUserAsync
const ambilDataUserAsync = require('./ambilDataUserAsync').default;

async function main() {
  try {
    const userData = await ambilDataUserAsync();
    console.log('Data user:', userData);
  } catch (error) {
    console.error('Gagal mengambil data user:', error);
  }
}

main();