# GreenSpark: levantar la demo en este dispositivo

Guía para ejecutar la demo localmente en Windows PowerShell desde:

```text
C:\Users\Emanuel Justiniano\gdg-hackathon-2026
```

## Estado verificado en este equipo

- Python: `3.14.0`
- Entorno virtual: `.venv` ya creado
- Node.js: `v24.16.0`
- npm: `11.13.0`
- Dependencias del frontend: `apps\web\node_modules` ya instalado
- Base SQLite con datos de demo: `database\greenspark.db`
- Archivo `.env`: no es necesario para la demo

Sin `.env`, el asesor de IA usa el fallback determinista. Esta es la opción recomendada durante la presentación porque evita depender de una API externa o de la conexión a internet.

## Antes de presentar

Abrir PowerShell y ejecutar esta verificación rápida:

```powershell
Set-Location 'C:\Users\Emanuel Justiniano\gdg-hackathon-2026'

Test-Path '.\.venv\Scripts\python.exe'
Test-Path '.\database\greenspark.db'
Test-Path '.\apps\web\node_modules'

Get-NetTCPConnection -State Listen -LocalPort 8000,5173 -ErrorAction SilentlyContinue |
    Select-Object LocalAddress, LocalPort, OwningProcess
```

Los tres `Test-Path` deben mostrar `True`. El último comando no debería mostrar procesos antes de iniciar la demo.

Si un puerto está ocupado por una ejecución anterior, identificar el proceso:

```powershell
Get-Process -Id <OwningProcess>
```

Cerrar las terminales anteriores de GreenSpark. Si el proceso sigue activo, detener únicamente el PID confirmado:

```powershell
Stop-Process -Id <OwningProcess>
```

## Levantar la demo

### Terminal 1: backend

Abrir una terminal PowerShell nueva y ejecutar:

```powershell
Set-Location 'C:\Users\Emanuel Justiniano\gdg-hackathon-2026'
& '.\.venv\Scripts\python.exe' -m uvicorn apps.api.main:app --host 127.0.0.1 --port 8000
```

Esperar hasta ver:

```text
Uvicorn running on http://127.0.0.1:8000
```

Verificar el backend desde otra terminal o desde el navegador:

```powershell
Invoke-RestMethod 'http://127.0.0.1:8000/health'
```

El campo `status` debe mostrar `ok`.

### Terminal 2: frontend

Mantener el backend abierto. Abrir una segunda terminal PowerShell y ejecutar:

```powershell
Set-Location 'C:\Users\Emanuel Justiniano\gdg-hackathon-2026\apps\web'
npm run dev -- --host 127.0.0.1
```

Esperar hasta ver:

```text
Local: http://127.0.0.1:5173/
```

### Abrir la aplicación

En una tercera terminal PowerShell:

```powershell
Start-Process 'http://127.0.0.1:5173/'
```

Rutas para la demo:

| Pantalla | URL |
| --- | --- |
| Landing principal | http://127.0.0.1:5173/ |
| Spark Console | http://127.0.0.1:5173/app |
| Estado del backend | http://127.0.0.1:8000/health |
| Documentación interactiva de la API | http://127.0.0.1:8000/docs |

## Verificación final antes de mostrar la pantalla

Con backend y frontend activos, ejecutar:

```powershell
Invoke-WebRequest -UseBasicParsing 'http://127.0.0.1:5173/' |
    Select-Object StatusCode

Invoke-WebRequest -UseBasicParsing 'http://127.0.0.1:5173/app' |
    Select-Object StatusCode

Invoke-RestMethod 'http://127.0.0.1:5173/api/health'
```

Las dos primeras respuestas deben mostrar `200`. La última debe incluir `status: ok`.

## Si se reinstalan dependencias

No ejecutar esta sección durante la presentación. Usarla solamente con anticipación si se borró `.venv` o `node_modules`.

### Backend

```powershell
Set-Location 'C:\Users\Emanuel Justiniano\gdg-hackathon-2026'
py -3.14 -m venv .venv
& '.\.venv\Scripts\python.exe' -m pip install -r requirements.txt
```

### Frontend

```powershell
Set-Location 'C:\Users\Emanuel Justiniano\gdg-hackathon-2026\apps\web'
npm install
```

## Detener la demo

En cada una de las dos terminales que mantienen servicios activos, presionar:

```text
Ctrl+C
```

## Nota sobre el agente de IA

Para la demo estable, dejar el archivo `.env` sin crear. El flujo principal, las predicciones y el asesor siguen funcionando con respuesta determinista.

Solo si se desea probar DeepSeek antes de la presentación, crear `.env` desde la plantilla y completar `AI_PROVIDER_API_KEY`:

```powershell
Set-Location 'C:\Users\Emanuel Justiniano\gdg-hackathon-2026'
Copy-Item '.env.example' '.env'
notepad '.env'
```
