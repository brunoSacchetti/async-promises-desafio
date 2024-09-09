import test from "ava";
import { ContactsController, ContactsControllerOptions } from "./controllers";
import { Contact } from "./models";

test("Testeo el constructor del controller", (t) => {
  // test de prueba
  t.truthy(true);
});

test("Testeo el método processOptions", (t) => {
  const controller = new ContactsController();

  const contact : Contact = {
    id: 1,
    name: "Ana",
  }

  const options : ContactsControllerOptions = {
    action: "get",
    params: contact,
  }

  controller.promesa.then(() => {
    const result = controller.processOptions(options);
    t.deepEqual(result, contact);
  });
  
});
