import { AgendaModel } from './model/agenda.js';
import { AgendaView } from './view/agendaView.js';
import { AgendaController } from './controller/agendaController.js';

// Creamos una instancia del modelo, la vista y el controlador
const model = new AgendaModel();
const view = new AgendaView();
const controller = new AgendaController(model, view);

// Inicializamos la aplicación
controller.inicializar();
