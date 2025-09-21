# crispy-parakeet

Servidor Django (básico) para archivos estáticos

## Descripción

Este proyecto es un servidor básico construido con Django para servir archivos estáticos. Está pensado como base para proyectos de desarrollo de interfaces en React, facilitando el despliegue y pruebas locales.

## Requisitos

- Python 3.12 o superior
- pip
- Django 5.2.6

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/josuabad/crispy-parakeet.git
   cd crispy-parakeet
   ```

2. Instala las dependencias:
   ```bash
   pip install -r requirements.txt
   ```

## Uso

1. Inicia el servidor de desarrollo:

   ```bash
   python manage.py runserver
   ```

2. Accede a la aplicación en tu navegador en [http://localhost:8000](http://localhost:8000).

## Estructura del proyecto

- `manage.py`: Script principal para tareas administrativas de Django.
- `crispy_parakeet/`: Carpeta principal.
- `static/`: Carpeta para archivos estáticos (imágenes, CSS, JS, etc.).
- `README.md`: Breve descripción del proyecto.

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
