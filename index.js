function landing(currentSpeed) {
  const safeLandingSpeed = 150;
  console.log("memulai proses pendaratan...");
  if (currentSpeed > safeLandingSpeed) {
    console.log("Kecepatan terlalu tinggi! Harap turunkan kecepatan.");
  } else {
    console.log("Kecepatan aman untuk pendaratan.");
    console.log("Pesawat berhasil mendarat!");
  }
}
