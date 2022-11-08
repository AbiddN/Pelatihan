async function home (req, res) {
    let gambar = ['gamber1', 'gambar2', 'gambar3'];
    let video = ['vid1', 'vid2', 'vid3'];
    let musik = ['musik1', 'musik2', 'musik3'];
    return res.status(200).json({
        message: "ini adalah konten di homepage",
        data: {
            gambar,
            video,
            musik
        }
    });
}

async function acara (re1, res) {
    let acara = "acara1, acara2, acara3, dst";
    return res.status(200).json({
        message: "ini adalah acara-acara yang tersedia",
        data: {
            acara
        }
    });
}

module.exports = { home, acara };