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



## Día 2 - Pruebas de Login con POM

En este día se implementaron flujos end-to-end de login en el sitio demo:

- **Versión inicial:** test plano con credenciales demo.
- **Versión mejorada:** implementación con Page Object Model (POM) para separar la lógica de UI y las pruebas.
- **Escenarios cubiertos:**
  - Login exitoso con credenciales válidas (`tomsmith / SuperSecretPassword!`).
  - Login fallido con credenciales inválidas, validando mensaje de error.

### Ejecución
Para correr las pruebas:
```bash
npm test


Esto ejecuta todos los casos definidos en la carpeta tests/.

## Evidencia
Los reportes de ejecución se generan automáticamente en playwright-report/ (ignorado en el repo).
Se incluyen capturas y reportes seleccionados en la carpeta reports/ .(Si solo se ejecuta npm test, la copia del reporte a la carpeta reports se debe hacer manualmente, el package.json contiene la configuración necesaria, pero debe ejecutarse como npm run test:reports )