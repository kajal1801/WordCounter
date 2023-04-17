// Twitter - 280 Characters Limit
// Instagram - 2200 Characters Limit
// Facebook - 63,206 Characters Limit
// LinkedIn - 3000 Characters Limit
const myTextarea = document.getElementById('text')
let charCount = 0
let wordCount = 0
render()
check()

// TextArea Input count (dynamic)
myTextarea.addEventListener('input', () => {
    const text = myTextarea.value
    charCount = 0
    wordCount = 0
    if(text !== '')
        wordCount = text.trim().split(/\s+/).filter(word => word !== '').length
    for (let i = 0; i < text.length; i++) {
        charCount++
    }
    render()
    check()
})

// Clear Button
document.getElementById('clear').addEventListener('click', () => {
    myTextarea.value = ''
    charCount = 0
    wordCount = 0
    render()
})

// Render Function
function render() {
    let html = ``
    html += `<p>Word Count: ${wordCount}</p>`
    html += `<p>Character Count: ${charCount}</p>`

    let social_html = ``
    // Twitter
    social_html += `
        <div class="social">
            <img src="./img/icons8-twitter-circled.svg" alt="Twitter" />
            <p> <span id=twitter>${charCount}</span> / 280</p>
        </div>
    `
    // Instagram
    social_html += `
        <div class="social">
            <img src="./img/icons8-instagram.svg" alt="Instagram" />
            <p><span id="instagram">${charCount}</span> / 2200</p>
        </div>
    `
    // Facebook
    social_html += `
        <div class="social"> 
            <img src="./img/icons8-facebook.svg" alt="Facebook" />   
            <p><span id="facebook">${charCount}</span> / 63206</p>
        </div>
    `
    // LinkedIn
    social_html += `
        <div class="social">
            <img src="./img/icons8-linkedin.svg" alt="LinkedIn" />
            <p><span id="linkedin">${charCount}</span> / 3000</p>
        </div>
    `

    document.getElementById('output').innerHTML = html
    document.getElementById('social-output').innerHTML = social_html
}

function check(){
    // Twitter
    if(document.getElementById('twitter').textContent > 280) {
        document.getElementById('twitter').style.color = 'red'
    } else {
        document.getElementById('twitter').style.color = 'green'
    }

    // Instagram
    if(document.getElementById('instagram').textContent > 2200) {
        document.getElementById('instagram').style.color = 'red'
    } else {
        document.getElementById('instagram').style.color = 'green'
    }

    // Facebook
    if(document.getElementById('facebook').textContent > 63206) {
        document.getElementById('facebook').style.color = 'red'
    } else {
        document.getElementById('facebook').style.color = 'green'
    }

    // LinkedIn
    if(document.getElementById('linkedin').textContent > 3000) {
        document.getElementById('linkedin').style.color = 'red'
    } else {
        document.getElementById('linkedin').style.color = 'green'
    }
}