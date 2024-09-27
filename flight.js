function takeOff(altitude) {
    if (altitude > 10000) {
        throw new Error("Ketinggian terlalu tinggi!");
    }
    else if (altitude < 0) {
        throw new Error("Ketinggian tidak valid!");
    }
    else {
        return "Pesawat lepas landas menuju ketinggian " + altitude + " meter.";
    }
}

try {
    console.log(takeOff(9000));  // Ketinggian valid
    console.log(takeOff(15000)); // Ketinggian terlalu tinggi
    console.log(takeOff(-100));  // Ketinggian tidak valid
} catch (error) {
    console.log(error.message);
}
