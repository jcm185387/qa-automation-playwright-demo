# qa-automation-playwright-demo
Demo para Automatización de pruebas con Playwright
# qa-automation-playwright-demo
Demo para Automatización de pruebas con Playwright

## 📖 Descripción
Proyecto de pruebas automatizadas con Playwright, diseñado como parte de un curso intensivo de 5 días.  
Incluye ejemplos de pruebas end-to-end, integración con CI/CD y reportes de ejecución.

---

## ⚙️ Instalación
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/<tu-usuario>/qa-automation-playwright-demo.git
   cd qa-automation-playwright-demo
2. Instalar dependencias:
   ```bash
   npm install
   npx playwright install
## Ejecución de pruebas
## Ejecutar todas las pruebas:
    ```bash
    npx playwright test
## Ejecutar pruebas en un navegador específico:
    ```bash
    npx playwright test --project=chromium
#Estructura del proyecto:
 ```bash
qa-automation-playwright-demo/
├── tests/          # Casos de prueba
├── reports/        # Evidencia y resultados
├── .gitignore
├── package.json
└── README.md

📊 Evidencia
Screenshots de pruebas fallidas.
Reportes HTML generados automáticamente.
Logs de ejecución.
(Agrega aquí capturas y ejemplos conforme avances en el curso.)


🔄 CI/CD
Este proyecto incluye integración con GitHub Actions:
Ejecución automática de pruebas en cada push.
Generación de reportes como artefactos.
(El pipeline se configurará en el Día 4.)

👤 Autor
Proyecto desarrollado por Juan, QA Manual con más de 8 años de experiencia, en transición hacia QA Automation.



