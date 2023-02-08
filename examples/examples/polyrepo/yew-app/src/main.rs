
use yew::prelude::*;
use yew_app::components::QuoteComponent;

#[function_component]
fn App() -> Html {
    html! {
        <div>
            <p><QuoteComponent /></p>
        </div>
    }
}


fn main() {
    yew::Renderer::<App>::new().render();
}
