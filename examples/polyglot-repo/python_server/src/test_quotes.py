from quote import quotes, random_quote

def test_quotes():
    quote = random_quote()
    assert(quote in quotes)



if __name__ == "__main__":
    test_quotes()
    print("Tests passed")

