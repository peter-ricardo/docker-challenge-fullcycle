FROM golang as builder

WORKDIR /app

COPY . /app

RUN CGO_ENABLED=0 GOOS=linux go build -o helloWorld main.go

FROM scratch

WORKDIR /app

COPY --from=builder /app/helloWorld ./

CMD [ "./helloWorld" ]