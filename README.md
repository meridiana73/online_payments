Autor: Javier Quero Gallego

Aplicación para ejecutar pagos y reembolso con dos pasarelas de pago.

Dentro de la carpeta src encontramos:
    public: parte FrontEnd si se diera de la aplicación por medio de un servidor web. Consta de la estructura html, los estilos css y un js por definir.
    server:
        app.js: fichero principal de la aplicación. Es el encargado de levantar un listener para la gestion de peticiones. Nos encontramos unicamente con dos metodos:
            - pay() funcion la cual se apoya en metodos propios de cada pasarela para realizar el pago. Incluye pequeña logica para distinguir pasarela.
            - reimburse() funcion la cual se apoya en metodos propios de cada pasarela para realizar el rembolso. Incluye pequeña logica para distinguir pasarela.
            - metodos .post con la informacion de la pasarela y la accion.
        <>_payments.js: metodos propios con auth de cada pasarela para gestionar cada acción.
        utils.js: metodos generales.