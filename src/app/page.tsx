import Image from "next/image";
import {
  BadgeCheck,
  Camera,
  Download,
  PackageCheck,
  RefreshCw,
  ScanBarcode,
  ShieldCheck,
  Store,
  Tag,
  WifiOff,
} from "lucide-react";

const APK_VERSION = "v1.0.3";
const REPO_URL = "https://github.com/Fhanafii/MerchGo-App";

function GitHubMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.02 2.79-.02 3.17 0 .31.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function DownloadButton({
  label = "Download APK",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <a
      href="/api/download"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark hover:shadow-primary/40 active:scale-[0.98] ${className}`}
    >
      <Download className="h-5 w-5" strokeWidth={2.5} />
      {label}
    </a>
  );
}

function Phone({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`phone ${className}`}>
      <Image src={src} alt={alt} width={440} height={956} priority />
    </div>
  );
}

const features = [
  {
    icon: Camera,
    title: "Absen dengan Selfie",
    desc: "Check in / check out pakai kamera selfie + timestamp. Sesi kerja yang terputus otomatis dipulihkan.",
  },
  {
    icon: Store,
    title: "Kunjungan Toko",
    desc: "Daftar toko, pencarian, detail kunjungan, sampai tambah toko baru langsung dari lapangan.",
  },
  {
    icon: PackageCheck,
    title: "Laporan Ketersediaan Produk",
    desc: "Catat ketersediaan produk per toko, lengkap dengan dukungan scan barcode.",
  },
  {
    icon: Tag,
    title: "Laporan Promo",
    desc: "Laporkan promo yang berjalan di toko — pilih produk, isi detail, kirim.",
  },
  {
    icon: WifiOff,
    title: "Offline First",
    desc: "Semua data tersimpan lokal di Room database. Tidak ada sinyal? Kerja tetap jalan.",
  },
  {
    icon: RefreshCw,
    title: "Sinkronisasi Otomatis",
    desc: "Pending queue + WorkManager mengirim data begitu koneksi kembali, dengan retry mechanism.",
  },
];

const screens = [
  {
    src: "/screenshots/absen.png",
    alt: "Layar absen MerchGo",
    label: "Absen",
    desc: "Check in / check out dengan selfie & timestamp.",
  },
  {
    src: "/screenshots/store-list.png",
    alt: "Layar daftar toko MerchGo",
    label: "Daftar Toko",
    desc: "Cari dan pilih toko tujuan kunjungan.",
  },
  {
    src: "/screenshots/store-detail.png",
    alt: "Layar detail toko MerchGo",
    label: "Detail Toko",
    desc: "Laporan produk & promo langsung dari halaman toko.",
  },
  {
    src: "/screenshots/absen-sukses.png",
    alt: "Layar absen berhasil MerchGo",
    label: "Absen Berhasil",
    desc: "Konfirmasi sukses dengan data sesi kerja tersimpan aman.",
  },
];

const stack = [
  "Kotlin",
  "MVVM + Repository",
  "Hilt",
  "Room",
  "Retrofit + OkHttp",
  "Coroutines & Flow",
  "WorkManager",
  "DataStore",
  "CameraX",
  "Material Design 3",
];

export default function Home() {
  return (
    <main>
      {/* ===== Navbar ===== */}
      <header className="sticky top-0 z-50 border-b border-ink/5 bg-canvas/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/merchgo-logo.svg"
              alt="MerchGo"
              className="h-9 w-auto"
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-ink/70 md:flex">
            <a href="#fitur" className="transition hover:text-primary-dark">
              Fitur
            </a>
            <a href="#tampilan" className="transition hover:text-primary-dark">
              Tampilan
            </a>
            <a href="#teknologi" className="transition hover:text-primary-dark">
              Teknologi
            </a>
            <a href="#download" className="transition hover:text-primary-dark">
              Download
            </a>
          </nav>
          <a
            href="/api/download"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition hover:bg-primary-dark"
          >
            <Download className="h-4 w-4" />
            APK
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary-dark">
              <BadgeCheck className="h-4 w-4" />
              Android 7.0+ · {APK_VERSION} tersedia
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Kerja merchandiser,{" "}
              <span className="text-primary-dark">tanpa batas sinyal.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/70">
              MerchGo membantu aktivitas harian merchandiser — absen, kunjungan
              toko, laporan produk &amp; promo. Dirancang{" "}
              <strong className="font-bold text-ink">offline first</strong>:
              data tetap terkumpul tanpa internet, lalu sinkron otomatis saat
              online.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <DownloadButton />
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 px-6 py-3 text-base font-bold text-ink transition hover:border-primary hover:text-primary-dark"
              >
                <GitHubMark className="h-5 w-5" />
                Lihat Source Code
              </a>
            </div>
            <p className="mt-4 text-sm text-ink/50">
              Gratis · APK resmi dari GitHub Releases · MIT License
            </p>
          </div>

          <div className="relative mx-auto flex w-full max-w-sm items-end justify-center">
            <Phone
              src="/screenshots/absen.png"
              alt="Layar absen MerchGo"
              className="w-56 rotate-[-4deg] sm:w-60"
            />
            <Phone
              src="/screenshots/store-list.png"
              alt="Layar daftar toko MerchGo"
              className="absolute -right-2 bottom-0 w-44 rotate-[6deg] sm:w-48"
            />
          </div>
        </div>
      </section>

      {/* ===== Fitur ===== */}
      <section id="fitur" className="border-t border-ink/5 bg-white py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-dark">
            Fitur Utama
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Semua kebutuhan lapangan, dalam satu aplikasi
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-ink/8 bg-canvas p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary-dark transition group-hover:bg-primary group-hover:text-white">
                  <f.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Offline-first highlight ===== */}
      <section className="overflow-hidden bg-ink py-20 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Offline First Architecture
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sinyal hilang? Kerja tetap jalan.
            </h2>
            <p className="mt-5 leading-relaxed text-white/70">
              MerchGo memakai arsitektur cache-first: setiap input disimpan
              dulu ke Room database, masuk ke pending queue, lalu WorkManager
              mengirimnya ke server begitu koneksi tersedia — lengkap dengan
              retry mechanism.
            </p>
            <ul className="mt-7 space-y-3 text-sm font-medium text-white/85">
              {[
                "Room Database sebagai sumber data utama di perangkat",
                "Pending queue untuk semua laporan yang belum terkirim",
                "Auto-sync + retry saat koneksi kembali",
                "Persistent session & auto-login",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center gap-3">
            <Phone
              src="/screenshots/loading.png"
              alt="Layar loading MerchGo"
              className="w-40 -rotate-3 sm:w-44"
            />
            <Phone
              src="/screenshots/absen-sukses.png"
              alt="Layar absen berhasil MerchGo"
              className="w-40 rotate-3 sm:w-44"
            />
          </div>
        </div>
      </section>

      {/* ===== Tampilan ===== */}
      <section id="tampilan" className="py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-dark">
            Tampilan Aplikasi
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            Bersih, cepat, Material Design 3
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {screens.map((s) => (
              <div key={s.label} className="text-center">
                <Phone
                  src={s.src}
                  alt={s.alt}
                  className="mx-auto w-40 transition duration-300 hover:-translate-y-2 hover:rotate-1"
                />
                <h3 className="mt-5 font-bold">{s.label}</h3>
                <p className="mx-auto mt-1 max-w-[15rem] text-sm text-ink/60">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Teknologi ===== */}
      <section
        id="teknologi"
        className="border-y border-ink/5 bg-white py-20"
      >
        <div className="mx-auto max-w-4xl px-5 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary-dark">
            Tech Stack
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Dibangun dengan standar Android modern
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/65">
            MVVM + Repository Pattern — UI tidak pernah menyentuh Retrofit atau
            Room secara langsung.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/10 bg-canvas px-4 py-2 text-sm font-semibold text-ink/80"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Download CTA ===== */}
      <section id="download" className="py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center text-white shadow-2xl shadow-primary/30 sm:px-16">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/15" />
            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-dark/40" />
            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <ScanBarcode className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Siap coba MerchGo?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/85">
                Download APK versi terbaru langsung dari GitHub Releases.
                Buka aplikasi, login, dan mulai kerja lapangan tanpa khawatir
                sinyal.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="/api/download"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-bold text-white shadow-lg transition hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
                >
                  <Download className="h-5 w-5" strokeWidth={2.5} />
                  Download MerchGo APK
                </a>
                <a
                  href={`${REPO_URL}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-7 py-3.5 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
                >
                  Riwayat Release
                </a>
              </div>
              <p className="mt-5 text-sm text-white/70">
                Versi {APK_VERSION} · Min. Android 7.0 (API 24) · ± beberapa MB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-ink/5 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/merchgo-logo.svg" alt="MerchGo" className="h-8 w-auto" />
          <p className="text-sm text-ink/55">
            Aplikasi merchandiser offline first — Kotlin · MVVM · Room ·
            WorkManager.
          </p>
          <div className="flex items-center gap-6 text-sm font-semibold text-ink/70">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-primary-dark"
            >
              <GitHubMark className="h-4 w-4" /> GitHub
            </a>
            <a
              href={`${REPO_URL}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary-dark"
            >
              Releases
            </a>
            <a
              href="https://dev-api.fhanafii.my.id/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-primary-dark"
            >
              API Docs
            </a>
          </div>
          <p className="mt-2 text-xs text-ink/40">
            © {new Date().getFullYear()} Fhanafi · MerchGo — MIT License
          </p>
        </div>
      </footer>
    </main>
  );
}
