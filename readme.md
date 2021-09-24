# Docker NodeJS simple task

Учебное задание.

## Описание
Приложение-счетчик:
* localhost:port/ (возвращается текущее значение счётчика, инкремента не происходит);
* localhost:port/stat (возвращается текущее значение счётчика, и происходит инкремент);
* localhost:port/about (возвращается html-страничка ниже - `<h3> Hello , _your_name_</h3>`).

## Запуск
```
docker run -dp 8080:8080 simple
```

