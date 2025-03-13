import books from "../../db";

export async function PUT(
    request: Request,
    context: { params: { id: string } },
) {
    const { id } = await context.params;
    const book = await request.json() as { id: number; title: string; author: string };
    const index = books.findIndex((b) => b.id === +id);
    if (index !== -1) {
        books[index] = book;
        return new Response(JSON.stringify(books), { status: 200 });
    } else {
        return new Response("Book not found", { status: 404 });
    }
}

export async function DELETE(
    request: Request,
    context: { params: { id: string } },
) {
    const { id } = await context.params;
    const index = books.findIndex((b) => b.id === +id);
    if (index !== -1) {
        books.splice(index, 1);
        return new Response(JSON.stringify(books), { status: 200 });
    } else {
        return new Response("Book not found", { status: 404 });
    }
}