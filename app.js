const header1 = document.querySelector('h5')

header1.style.textAlign = 'center'

header1.style.backgroundColor = '#fff9dc'

header1.style.padding = '1rem'

header1.style.borderRadius = '20px'

header1.style.maxWidth = '500px'

header1.style.position = 'fixed'

header1.style.right = '15%'

// console.log('hi') snippet case

// const heading = document.querySelector('h1')

switchBackgroundColor(header1)

function switchBackgroundColor(node) {
    node.onclick = () => {
        if (node.style.backgroundColor === 'rgb(229, 255, 231)') {
            node.style.backgroundColor = '#fff9dc'
        } else {
            node.style.backgroundColor = 'rgb(229, 255, 231)'
        }
    }
}

const header2 = document.querySelectorAll('img')[0]

switchImage(header2)

function switchImage(node) {
    node.onclick = () => {
        if (
            node.src ===
            'https://c4.wallpaperflare.com/wallpaper/1004/255/828/digital-art-warrior-samurai-landscape-hd-wallpaper-preview.jpg'
        ) {
            node.src = 'images/samurai.jpg'
        } else {
            node.src =
                'https://c4.wallpaperflare.com/wallpaper/1004/255/828/digital-art-warrior-samurai-landscape-hd-wallpaper-preview.jpg'
        }
    }
}
