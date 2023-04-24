FROM  rust:1.68
# Set destination for COPY
WORKDIR /app

COPY Cargo.lock Cargo.toml Rocket.toml quotes.txt ./
COPY src ./src
RUN cargo build --release --bin quote_server
RUN cp /app/target/release/quote_server /app/quote_server

# Build

# Optional:
# To bind to a TCP port, runtime parameters must be supplied to the docker command.
# But we can document in the Dockerfile what ports
# the application is going to listen on by default.
# https://docs.docker.com/engine/reference/builder/#expose
EXPOSE 8000

# Run
CMD ["/app/quote_server"]
#CMD ["/app/target/debug/quote_server"]