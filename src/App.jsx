function App() {
  return (
    <div>
      <h1 class="text-4xl text-red-900 text-center py-20">Le site de M.C.</h1>
      <p align = "center"><img src="data:image/jpeg;base64,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"></img></p>
      <p align= "center"><button>Click me</button></p>
      <p class="text-2xl text-green-400 text-center py-20">Hello les Mineurs! <br></br>On est gentils ici, mais on se laisse pas marcher sur les platebandes! Voyons voir si cette sorcellerie fonctionne...</p>
      <p class="text-2xl text-green-400 text-center py-20">Hello les plus beaux !</p>
      <h1 class="text-4xl text-red-900 text-center py-20"> VENTE</h1>
      <div>
      <div class="flex font-sans">
  <div class="flex-none w-48 relative">
    <img src="/classic-utility-jacket.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex flex-wrap">
      <h1 class="flex-auto text-lg font-semibold text-slate-900">
        Utility Jacket
      </h1>
      <div class="text-lg font-semibold text-slate-500">
        $110.00
      </div>
      <div class="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        In stock
      </div>
    </div>
    <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-2 flex text-sm">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button class="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p class="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
      </div>
    </div>
    
  );
}

export default App;
