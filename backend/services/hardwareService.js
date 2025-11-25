const HardwareInventory = require("../models/hardwareInventoryModel");
const History = require("../models/historyModel");
const HardwareStatus = require('../models/hardwareStatusModel');
const Employee = require("../models/EmployeeModel");
const Locker = require("../models/lockerModel");

class HardwareService {
  static async updateHardware(user_id, id, newData) {
    const oldHardware = await HardwareInventory.getHardwareInventoryById(id);
    if (!oldHardware) return null;

    let changes = [];

    if (newData.hardware_data_id != undefined && Number(newData.hardware_data_id) !== Number(oldHardware.hardware_data_id)) changes.push(`Hardware-Daten-ID: ${oldHardware.hardware_data_id} → ${newData.hardware_data_id}`);
    if (newData.serial_number != undefined && newData.serial_number !== oldHardware.serial_number) changes.push(`Seriennummer: ${oldHardware.serial_number} → ${newData.serial_number}`);
    if (newData.status_id != undefined && Number(newData.status_id) !== Number(oldHardware.status_id)){
      const oldStatus = await HardwareStatus.getById(oldHardware.status_id);
      const neuStatus = await HardwareStatus.getById(newData.status_id);
      changes.push(`Status: ${oldStatus.status} → ${neuStatus.status}`)
    };
    if (newData.delivery_date != undefined  && new Date(newData.delivery_date).getDate() !== new Date(oldHardware.delivery_date).getDate()) changes.push(`Lieferdatum: ${oldHardware.delivery_date} → ${newData.delivery_date}`);
    if (newData.imei != undefined && newData.imei !== oldHardware.imei) changes.push(`IMEI: ${oldHardware.imei} → ${newData.imei}`);
    if (newData.locker_id != undefined && Number(newData.locker_id) !== Number(oldHardware.locker_id)){
      const oldSchrank = await Locker.getLockerById(oldHardware.locker_id) || {};
      const neuSchrank = await Locker.getLockerById(newData.locker_id) || {};
      changes.push(`Schrank: ${oldSchrank.label} → ${neuSchrank.label}`);
    } 
    if (newData.delivery_note_date != undefined && new Date(newData.delivery_note_date).getDate() !== new Date(oldHardware.delivery_note_date).getDate()) changes.push(`Lieferschein-Datum: ${oldHardware.delivery_note_date} → ${newData.delivery_note_date}`);
    if (newData.budget_aligned != undefined && Number(newData.budget_aligned) !== Number(oldHardware.budget_aligned)) changes.push(`Budget: ${oldHardware.budget_aligned} → ${newData.budget_aligned}`);
    if (newData.employee_id != undefined && Number(newData.employee_id) !== Number(oldHardware.employee_id)){
      const oldEmployee = await Employee.getEmployeeById(oldHardware.employee_id)|| {first_name: "noch" , last_name:"offen"};
      const neuEmployee = await Employee.getEmployeeById(newData.employee_id) || {first_name: "" , last_name:"offen"};
      changes.push(`Ausleihende: ${oldEmployee.first_name + " " + oldEmployee.last_name} → ${neuEmployee.first_name + " " + neuEmployee.last_name}`);
    }
       
    if (newData.lends_out_at != undefined && new Date(newData.lends_out_at).getDate() !== new Date(oldHardware.lends_out_at).getDate()) changes.push(`Ausgabe-Datum: ${oldHardware.lends_out_at || "Offen"} → ${newData.lends_out_at|| "Offen"}`);
    if (newData.returned_at != undefined  && new Date(newData.returned_at).getDate() !== new Date(oldHardware.returned_at).getDate()) changes.push(`Rückgabedatum: ${oldHardware.returned_at || "Offen"} → ${newData.returned_at || "Offen"}`);
     

   
    if (changes.length === 0) return { message: "Keine Änderungen vorgenommen" };

 
    if(Number(oldHardware.status_id) ===2 && Number(newData.status_id) === 1 && !newData.returned_at){ newData.returned_at = new Date();}

    await HardwareInventory.updateHardware(id, newData);

    const description = changes.join("\n");
    await History.createHistory(user_id, id, 2, description);

    return { id, ...newData };
  }
}

module.exports = HardwareService;
