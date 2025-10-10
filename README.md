# 🚀 Vue Portfolio

> Modern web teknolojileri ile geliştirilmiş responsive kişisel portfolyo websitesi

[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

## ✨ Özellikler

- 🎨 **Modern Dark Tema** - Göz dostu koyu renk paleti
- 📱 **Fully Responsive** - Tüm cihazlarda mükemmel görünüm
- ⚡ **Blazing Fast** - Vite ile optimize edilmiş performans
- 🔧 **TypeScript** - Type-safe kod geliştirme
- 🌐 **i18n Support** - Türkçe ve İngilizce dil desteği
- 🌍 **Auto Language Detection** - Tarayıcı diline göre otomatik dil seçimi
- 🎭 **Smooth Animations** - CSS3 ve Vue transitions
- 🔄 **Dynamic Content** - GitHub API entegrasyonu
- ☁️ **Cloudflare Ready** - Cloudflare ile optimize edilmiş

## 🛠️ Teknoloji Stack

### Frontend
- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Static type checking
- **Vue Router** - Official router for Vue.js
- **Vue I18n** - Internationalization plugin
- **CSS3** - Modern styling with custom properties

### Build Tools
- **Vite** - Next generation frontend tooling
- **Vue TSC** - TypeScript compiler for Vue

### Deployment
- **Vercel** - Serverless deployment platform
- **Cloudflare** - CDN and edge network
- **Edge Functions** - Serverless functions at the edge

## 📦 Kurulum

### Gereksinimler
- Node.js 16+ 
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
   ```bash
   git clone https://github.com/CilginSinek/Vue-Portfolio.git
   cd Vue-Portfolio
   ```

2. **Bağımlılıkları yükleyin**
   ```bash
   npm install
   ```

3. **Development sunucusunu başlatın**
   ```bash
   npm run dev
   ```

4. **Tarayıcınızda açın**
   ```
   http://localhost:5173
   ```

## 🚀 Deployment

### Vercel'e Deploy

1. **Vercel CLI'yi yükleyin**
   ```bash
   npm install -g vercel
   ```

2. **Deploy edin**
   ```bash
   vercel
   ```

### Build

```bash
# Production build
npm run build

# Preview build
npm run preview
```

## 📁 Proje Yapısı

```
Vue-Portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons
│   ├── components/     # Vue components
│   │   ├── About.vue
│   │   ├── Contact.vue
│   │   ├── Home.vue
│   │   ├── Repo.vue
│   │   └── Repos.vue
│   ├── i18n/          # Internationalization
│   │   ├── index.ts   # i18n configuration
│   │   └── locales/   # Translation files
│   │       ├── tr.json
│   │       └── en.json
│   ├── Router/         # Vue Router config
│   ├── App.vue         # Main app component
│   ├── main.ts         # App entry point
│   └── style.css       # Global styles
├── middleware.ts       # Vercel Edge Middleware
├── vercel.json        # Vercel configuration
└── package.json       # Dependencies
```

## 🎨 Tasarım Özellikleri

- **Modern Dark UI** - Minimalist ve şık tasarım
- **Glassmorphism Effects** - Bulanık cam efektleri
- **Gradient Accents** - Mor-mavi gradient vurgular
- **Smooth Transitions** - Yumuşak sayfa geçişleri
- **Hover Animations** - Etkileşimli hover efektleri
- **Loading States** - Profesyonel loading ekranları
- **Language Switcher** - Kolay dil değiştirme

## 🌍 Çok Dilli Destek

Site şu dilleri destekler:
- 🇹🇷 **Türkçe** (varsayılan)
- 🇬🇧 **English**

Dil otomatik olarak tarayıcı diline göre seçilir ve kullanıcı navbar'daki butonlarla istediği zaman değiştirebilir. Seçilen dil localStorage'a kaydedilir.

## 🔧 Özelleştirme

### Renk Teması
CSS custom properties ile kolayca özelleştirilebilir:

```css
:root {
  --bg-primary: #0a0a0b;
  --bg-secondary: #111111;
  --accent-primary: #8b5cf6;
  --accent-secondary: #a855f7;
  /* ... */
}
```

### İçerik Güncelleme
- `src/components/` dizinindeki Vue componentleri düzenleyin
- `src/i18n/locales/` dizinindeki çeviri dosyalarını düzenleyin
- Yeni dil eklemek için:
  1. `src/i18n/locales/` içine yeni JSON dosyası ekleyin
  2. `src/i18n/index.ts` dosyasında yeni dili import edin
  3. Language switcher'a yeni butonu ekleyin

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👨‍💻 Geliştirici

**CilginSinek**
- GitHub: [@CilginSinek](https://github.com/CilginSinek)

## 🙏 Teşekkürler

- [Vue.js](https://vuejs.org/) - Awesome framework
- [Vite](https://vitejs.dev/) - Lightning fast build tool
- [Vercel](https://vercel.com/) - Amazing deployment platform

---

⭐ Bu projeyi beğendiyseniz star vermeyi unutmayın!
