# 🌟 SKYGEM-Lite

**SKYGEM-Lite** es una aplicación web moderna para generar itinerarios de viaje personalizados utilizando inteligencia artificial. La aplicación aprovecha la API de Google Gemini para crear planes de viaje detallados basados en las preferencias del usuario.

## ✨ Características

- 🎯 **Generación de Itinerarios Personalizados**: Crea planes de viaje únicos basados en destino, duración, intereses y presupuesto
- 🤖 **Inteligencia Artificial**: Utiliza Google Gemini AI para generar recomendaciones inteligentes
- 🌙 **Modo Oscuro/Claro**: Interfaz adaptable con tema oscuro y claro
- 📱 **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- ⚡ **Interfaz Moderna**: Diseño limpio y intuitivo con animaciones suaves
- 🎨 **UI/UX Excepcional**: Interfaz de usuario moderna con Tailwind CSS
- 🔄 **Tiempo Real**: Generación instantánea de itinerarios
- 💰 **Estimación de Costos**: Incluye estimaciones de costos para cada actividad

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 19.1.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.7.2** - Tipado estático para JavaScript
- **Vite 6.2.0** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework CSS utilitario

### Inteligencia Artificial
- **Google Gemini AI** - API de inteligencia artificial para generación de contenido
- **@google/genai 1.6.0** - SDK oficial de Google para Gemini

### Desarrollo
- **Node.js** - Entorno de ejecución
- **npm** - Gestor de paquetes

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (incluido con Node.js)
- **Cuenta de Google Cloud** con acceso a la API de Gemini

## 🚀 Instalación Local

### 1. Clonar el Repositorio

```bash
git clone <URL-del-repositorio>
cd Proyecto-SKYGEM---Labo05-IA
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
# .env
GEMINI_API_KEY=tu_clave_api_de_gemini_aqui
```

### 4. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 🔑 Configuración de la API de Gemini

### 1. Obtener Clave API de Google Gemini

1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Inicia sesión con tu cuenta de Google
3. Haz clic en "Create API Key"
4. Copia la clave API generada

### 2. Configurar la Variable de Entorno

Añade tu clave API al archivo `.env`:

```env
GEMINI_API_KEY=tu_clave_api_real_aqui
```

### 3. Verificar Configuración

La aplicación verificará automáticamente si la clave API está configurada al iniciar. Si no está configurada, verás un mensaje de error.

## 📁 Estructura del Proyecto

```
Proyecto-SKYGEM---Labo05-IA/
├── components/                 # Componentes React reutilizables
│   ├── Button.tsx             # Componente de botón personalizado
│   ├── ErrorMessage.tsx       # Mensajes de error
│   ├── Footer.tsx             # Pie de página
│   ├── Header.tsx             # Encabezado con navegación
│   ├── InputField.tsx         # Campo de entrada
│   ├── ItineraryDisplay.tsx   # Visualización de itinerarios
│   ├── LoadingSpinner.tsx     # Indicador de carga
│   ├── TextAreaField.tsx      # Campo de texto multilínea
│   └── ThemeToggle.tsx        # Interruptor de tema
├── contexts/                  # Contextos de React
│   └── ThemeContext.tsx       # Contexto para gestión de temas
├── services/                  # Servicios y APIs
│   └── geminiService.ts       # Servicio de integración con Gemini AI
├── App.tsx                    # Componente principal de la aplicación
├── constants.ts               # Constantes de la aplicación
├── index.html                 # Archivo HTML principal
├── index.tsx                  # Punto de entrada de React
├── types.ts                   # Definiciones de tipos TypeScript
├── vite.config.ts             # Configuración de Vite
├── package.json               # Dependencias y scripts
└── README.md                  # Este archivo
```

## 🎯 Uso de la Aplicación

### 1. Configurar Preferencias de Viaje

- **Destino**: Ingresa el lugar que deseas visitar
- **Número de Días**: Especifica la duración de tu viaje
- **Intereses**: Describe tus actividades preferidas (museos, senderismo, gastronomía, etc.)
- **Presupuesto**: Define tu rango de presupuesto

### 2. Generar Itinerario

Haz clic en "Generar Itinerario" y espera a que la IA procese tu solicitud.

### 3. Revisar Resultados

El itinerario generado incluirá:
- Plan detallado día por día
- Horarios sugeridos para cada actividad
- Descripciones detalladas
- Estimaciones de costos

## 🏗️ Scripts Disponibles

```bash
# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview
```

## 🔧 Configuración de Vite

El proyecto utiliza Vite con las siguientes configuraciones:

- **Alias de rutas**: `@` apunta a la raíz del proyecto
- **Variables de entorno**: Configuración automática de `process.env.API_KEY`
- **Hot Module Replacement**: Recarga automática durante desarrollo

## 🎨 Temas y Estilos

La aplicación utiliza Tailwind CSS con:

- **Modo Claro**: Fondo claro con texto oscuro
- **Modo Oscuro**: Fondo oscuro con texto claro
- **Transiciones suaves**: Animaciones de 200ms para cambios de tema
- **Diseño responsivo**: Adaptable a diferentes tamaños de pantalla

## 🚨 Solución de Problemas

### Error: "La clave API de Gemini no está configurada"

1. Verifica que el archivo `.env` existe en la raíz del proyecto
2. Asegúrate de que `GEMINI_API_KEY` esté correctamente definido
3. Reinicia el servidor de desarrollo

### Error: "Clave API de Gemini inválida"

1. Verifica que tu clave API sea válida en [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Asegúrate de que tu cuenta tenga acceso a la API de Gemini
3. Verifica que no hay espacios extra en la variable de entorno

### Error: "Has excedido tu cuota de la API"

1. Revisa tu uso en [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Considera actualizar tu plan si es necesario
3. Espera hasta que se reinicie tu cuota

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**SKYGEM-Lite** - Proyecto desarrollado para el Laboratorio 05 de Inteligencia Artificial.

## 🙏 Agradecimientos

- **Google Gemini AI** por proporcionar la API de inteligencia artificial
- **React Team** por el framework de interfaz de usuario
- **Vite Team** por las herramientas de construcción
- **Tailwind CSS** por el framework de estilos

---

⭐ Si este proyecto te ha sido útil, ¡no olvides darle una estrella!
