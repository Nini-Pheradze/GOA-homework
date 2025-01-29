# Write a function that takes a paragraph and splits it into sentences based on periods.

def split_paragraph(paragraph):
    sentences = paragraph.split('.')
    for sentence in sentences:
        if sentence:  
            print(sentence)

paragraph = "This is the first sentence. Here's the second one. And the third."
split_paragraph(paragraph)