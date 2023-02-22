from quote import quotes, random_quote

def test_quotes():
    qs = quotes()
    print('All quotes: \n', qs)
    quote = random_quote()
    assert(quote in qs)


if __name__ == "__main__":
    test_quotes()
    print("Tests passed")

