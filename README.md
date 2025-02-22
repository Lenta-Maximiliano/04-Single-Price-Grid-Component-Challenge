# Solución al Desafío "Single Price Grid Component"

Esta es una solución para el desafío [Single Price Grid Component de Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de desarrollo web mediante proyectos realistas.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
  - [Enlaces](#enlaces)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Aprendizajes](#aprendizajes)
- [Autor](#autor)
- [¿Cómo Ejecutar Localmente?](#como-ejecutar-localmente)

---

## Descripción General

### Enlaces
- **URL del Sitio en Vivo**: [Ver sitio aquí](https://04-single-price-grid-challenge.netlify.app/)

---

## Tecnologías Utilizadas
- CSS con propiedades personalizadas
- [React](https://reactjs.org/) - Biblioteca para interfaces de usuario
- Flujo de trabajo basado en **Mobile First**

---

## Características
- Diseño completamente responsive para dispositivos móviles y escritorio.
- Componentes React modulares (CommunitySection, SubscriptionSection, WhyUsSection, Footer).
- Estructura CSS limpia y reutilizable utilizando la metodología BEM.
- Mejores prácticas en diseño web responsive.

---

## Aprendizajes
En este proyecto, reforcé los siguientes conceptos:
- **Componentización en React**: Dividir la interfaz en componentes pequeños y reutilizables (por ejemplo, CommunitySection, SubscriptionSection, WhyUsSection, Footer).
- **Convención de Nombres BEM**: Mantener una estructura de clases CSS clara y consistente.
- **Flujo de trabajo con Git**: Gestionar ramas (por ejemplo, `dev` y `main`) y realizar commits estructurados.

### Ejemplo de Código
Aquí tienes un ejemplo de cómo modularicé un componente en React:

```jsx

export default function SubscriptionSection() {
  return (
    <section className="subscription">
      <h2 className="subscription__title">Monthly Subscription</h2>
      <span className="subscription__amount">$29</span> <span className="subscription__period">per month</span>
      <p className="subscription__description">Full access for less than $1 a day</p>
      <button className="subscription__button">Sign Up</button>
  </section>
  );
}
  
  
```

# Autor
- **Perfil en Frontend Mentor**: [Lenta, Maximiliano Carlos](https://www.frontendmentor.io/profile/Lenta-Maximiliano)
- **Perfil en GitHub**: [Lenta-Maximiliano](https://github.com/Lenta-Maximiliano)
- **LinkedIn**: [Lenta, Maximiliano Carlos](https://linkedin.com/in/Lenta-Maximiliano)

## Como Ejecutar Localmente

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/Lenta-Maximiliano/04-Single-Price-Grid-Component-Challenge.git

2. **Navega a la carpeta del proyecto:**
    ```bash
    cd 04-Single-Price-Grid-Component-Challenge

3. **Instala las dependencias:**
    ```bash
    npm install

4. **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev