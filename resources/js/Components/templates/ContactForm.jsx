const ContactForm = () => {
    return (
      <div className="relative z-10 mt-1 bg-white bg-opacity-5 p-5 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold text-white">Suggestion</h2>
        <form className="mt-4 space-y-4">
          {/* Nama */}
          <div>
            <label className="block text-black text-left m-1 font-medium">Nama</label>
            <input type="text" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Masukkan nama Anda" />
          </div>
          {/* Email */}
          <div>
            <label className="block text-black text-left m-1 font-medium">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Masukkan email Anda" />
          </div>
          {/* Pesan */}
          <div>
            <label className="block text-black text-left m-1 font-medium">Message</label>
            <textarea className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" rows="4" placeholder="Tulis pesan Anda..." ></textarea>
          </div>
  
          {/* Tombol Kirim */}
          <button type="button" className="w-full cursor-pointer transition-all bg-purple-500 text-white px-6 py-2 rounded-lg border-purple-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
            Send
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  