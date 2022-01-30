
const callApi = (url) => new Promise(function (resolve, reject) {
    // Tüm servis isteklerimiz bu noktadan geçecek, 
    // Log authorization işlemleri için kolaylık sağlayacaktır.
    fetch(url).then(res => res.json())
        .then(
            (data) => {
                resolve(data);
            },
            (error) => {
                reject(error)
            }
        )
})


export default callApi;