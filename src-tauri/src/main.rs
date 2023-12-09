// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet, second_greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name_string: &str) -> String {
  format!("Hello, {}!", name_string)
}

#[tauri::command]
fn second_greet(name_string: &str) -> String {
  format!("Hello again, {}!", name_string)
}