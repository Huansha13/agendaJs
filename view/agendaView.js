// Definimos la vista de la agenda
export const AgendaView = function() {
	this.mostrarContactos = function(contactos) {
		let html = '';
		for (let i = 0; i < contactos.length; i++) {
			html += '<tr>';
			html += '<td>' + contactos[i].nombre + '</td>';
			html += '<td>' + contactos[i].telefono + '</td>';
			html += '<td><button class="btn btn-danger borrar" data-nombre="' + contactos[i].nombre + '">Borrar</button></td>';
			html += '</tr>';
		}
		$('#contactos').html(html);
	};
};