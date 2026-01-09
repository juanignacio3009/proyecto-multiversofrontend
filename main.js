function loadApp(framework) {
    const frame = document.getElementById('app-frame');
    const welcome = document.getElementById('welcome-message');
    
    welcome.style.display = 'none';
    frame.style.display = 'block';

    if (framework === 'angular') {
        // Apunta a la ruta build de Angular
        frame.src = './angular-app/dist/angular-app/browser/index.html';
    } else if (framework === 'react') {
        // Apunta a la ruta build de React
        frame.src = './react-app/build/index.html';
    }
}