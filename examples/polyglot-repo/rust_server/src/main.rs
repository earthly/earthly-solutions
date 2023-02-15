use quote_server::quote_generator;

use rocket::{http::{Method, Header}, fairing::Fairing, fairing::{Info, Kind}, Response, Request};

#[macro_use]
extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    quote_generator::random_quote()
}

#[launch]
fn rocket() -> _ {
    quote_generator::hello();
    rocket::build().attach(Cors).mount("/", routes![index])
}



pub struct Cors;

/// Catches all OPTION requests in order to get the CORS related Fairing triggered.
#[options("/<_..>")]
fn all_options() {
    /* Intentionally left empty */
}

#[rocket::async_trait]
impl Fairing for Cors  {
    fn info(&self) -> Info {
        Info { 
            name: "Cross-Origin-Resource-Sharing Fairing", 
            kind: Kind::Response}
    }
    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new(
            "Access-Control-Allow-Methods",
            "POST, PATCH, PUT, DELETE, HEAD, OPTIONS, GET",
        ));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}
