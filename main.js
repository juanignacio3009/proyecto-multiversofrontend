function loadApp(framework) {
    const frame = document.getElementById('app-frame');
    const welcome = document.getElementById('welcome-message');
    
    welcome.style.display = 'none';
    frame.style.display = 'block';

    if (framework === 'angular') {
        // Esta es la ruta exacta según tu log de Angular 18
        frame.src = './angular-app/dist/angular-app/browser/index.html';
    } else if (framework === 'react') {
        // Esta es la ruta exacta según tu log de React
        frame.src = './react-app/build/index.html';
    }
}
