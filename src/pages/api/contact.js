import db from '../../lib/db.js';

export const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Todos los campos son obligatorios' 
      }), { status: 400 });
    }

    const stmt = db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)');
    stmt.run(name, email, message);

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Mensaje guardado correctamente' 
    }), { status: 200 });

  } catch (error) {
    console.error('Database Error:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Error interno del servidor' 
    }), { status: 500 });
  }
};
