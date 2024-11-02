let images = [
    'https://images.unsplash.com/photo-1730292423405-29ebe8d9257e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1730216597753-1b8ac897bcc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1730248202596-fbdef5624120?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1726853550448-905284dd0073?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1728901863101-9d82fe7f4276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
];

let currentIndex = 0;
let imageElement = document.getElementById('image');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

function updateImage() {
    imageElement.style.transform = 'scale(0)';
    setTimeout(() => {
        imageElement.src = images[currentIndex];
        imageElement.style.transform = 'scale(1)';
    }, 500); 
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

updateImage();