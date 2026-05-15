indexedDB.conupgradeneeded = function(event) {
  var db = event.target.result;
  var objectStore = db.createObjectStore("users", { keyPath: "id" });
  objectStore.createIndex("id", "id", { unique: true });
  objectStore.createIndex("name", "name", { unique: false });
  objectStore.createIndex("email", "email", { unique: true });
  objectStore.createIndex("password", "password", { unique: false });
  var objectStore = db.createObjectStore("Employees", { keyPath: "id" });
  objectStore.createIndex("name", "name", { unique: false });
  objectStore.createIndex("email", "email", { unique: true });
  objectStore.createIndex("password", "password", { unique: false });
  objectStore.createIndex("address", "address", { unique: false });
  var objectStore = db.createObjectStore("Departments", { keyPath: "id" });
  objectStore.createIndex("id", "id", { unique: true });
  objectStore.createIndex("name", "name", { unique: true });
};
function openDatabase() {
    var request = indexedDB.open("employee_management_system", 1);
    request.onsuccess = function(event) {
        var db = event.target.result;
        console.log("Database opened successfully");
    }
    request.onerror = function(event) {
        console.error("Error opening database:", event.target.error);
    }
}
openDatabase();



