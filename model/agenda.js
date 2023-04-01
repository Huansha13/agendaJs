// Definimos el modelo de la agenda
export const AgendaModel = function() {
	this.contactos = [];
	
	this.agregarContacto = function(nombre, telefono) {
		this.contactos.push({
			nombre: nombre,
			telefono: telefono
		});
	};
	
	this.obtenerContactos = function() {
		return this.contactos;
	};
};