# App de Autenticación y Perfil (Expo)

Este es un proyecto de aplicación móvil simple, desarrollado con React Native y Expo, que implementa un flujo de autenticación de usuarios. La app utiliza Expo Router para la navegación y React Context para la gestión del estado de autenticación.

## 🚀 Características

* **Flujo de Autenticación:** Pantalla de Login (con email y contraseña) que redirige a una sección privada.
* **Navegación Protegida:** Uso de `expo-router` con un layout de Stack que separa las rutas públicas (Login) de las privadas (`(tabs)`).
* **Gestión de Estado Centralizada:** El estado del usuario (si está logueado o no, y sus datos) se maneja de forma global usando React Context (`AuthProvider`).
* **Pantalla de Perfil:** Una vez logueado, el usuario puede ver su email y nombre en una pestaña de "Perfil".
* **Cerrar Sesión:** Funcionalidad para `logout` que limpia el estado y regresa al usuario a la pantalla de Login.
* **Validación de Contraseña:** Incluye lógica de validación de contraseña en el frontend (largo, mayúsculas, minúsculas, números, caracteres especiales).
* **UI Personalizada:** Estilos básicos con un fondo de color sólido para el login y botones personalizados.

## 💻 Tecnologías Utilizadas

* React Native
* Expo (SDK 50+)
* Expo Router (para navegación basada en archivos)
* React Context API (para gestión de estado)
* TypeScript

## 🛠️ Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/tu-repositorio.git](https://github.com/tu-usuario/tu-repositorio.git)
    cd tu-repositorio
    ```

2.  **Instalar dependencias:**
    Se recomienda usar `npm`.
    ```bash
    npm install
    ```

3.  **Ejecutar el proyecto:**
    Inicia el servidor de desarrollo de Expo.
    ```bash
    npx expo start
    ```

4.  **Probar en el dispositivo:**
    * Descarga la aplicación **Expo Go** en tu teléfono (iOS o Android).
    * Escanea el código QR que aparece en la terminal o en el navegador.

## 🔑 Credenciales de Prueba

Puedes usar las siguientes cuentas (definidas en `components/context/auth-context.tsx`) para iniciar sesión:

* **Usuario:** `user@correo.cl`
* **Contraseña:** `1234`

* **Usuario:** `admin@correo.cl`
* **Contraseña:** `1234`