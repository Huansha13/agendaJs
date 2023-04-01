// Definimos el controlador de la agenda
export const AgendaController = function(model, view) {
	// Función para inicializar la aplicación
	this.inicializar = function() {
		// Mostramos los contactos existentes
		view.mostrarContactos(model.obtenerContactos());
		
		// Agregamos el evento al formulario para agregar contactos
		$('form').submit(function(event) {
			event.preventDefault();
			const nombre = $('#nombre').val();
			const telefono = $('#telefono').val();
			model.agregarContacto(nombre, telefono);
			view.mostrarContactos(model.obtenerContactos());
			$('#nombre').val('');
			$('#telefono').val('');
		});
		
		// Agregamos el evento a los botones de borrar
		$('#contactos').on('click', '.borrar', function() {
			const nombre = $(this).data('nombre');
			model.contactos = model.contactos.filter(function(contacto) {
				return contacto.nombre !== nombre;
			});
			view.mostrarContactos(model.obtenerContactos());
		});
	};
};