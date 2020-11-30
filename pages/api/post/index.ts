import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(req, res) {
  const { baslik, aciklama, authorEmail } = req.body
  const saat= "23:12:21"
  var tarih= "23-12-21"
  // const tarihConv = tarih.toDate()

  const result = await prisma.gorevlendirmeler.create({
    data: {
      baslik: baslik,
      aciklama: aciklama,
      gorev_numara: 3,
      surec_numara: 0,
      ana_gorev_numara: 1,
      ana_gorev: "1",
      tarih: tarih, 
      saat: saat,
      termin_dk: 1,
      termin_saat: 1,
      termin_gun: 1,
      eklenme_tarihi: tarih,
      eklenme_saati: saat,
      aktif: "1",
      bitirilmesi_gereken_tarih: tarih,
      bitirilmesi_gereken_saat: saat,
      muhlet_bitis_tarihi: tarih,
      muhlet_bitis_saati: saat,
      personel_numara: 1,


      // author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
}
