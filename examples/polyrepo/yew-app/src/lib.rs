

pub mod components {
    use yew::{function_component, html, Html, Component, Context};
    use yew::prelude::*;
    
    #[function_component]
    pub fn QuoteComponent() -> Html {
        html! { "Show a quote here..."}

    }

    pub struct RandomQuote {
        quote: String,
    }
    
    pub enum Msg {
        Fetch,
    }

    impl Component for RandomQuote {
        type Message = Msg;
        type Properties = ();

        fn create(ctx: &Context<Self>) -> Self {
            Self { quote: String::from("I was initialized") }
        }

        fn view(&self, ctx: &Context<Self>) -> Html {
            html! {
                 
            }
        }
    }

}
