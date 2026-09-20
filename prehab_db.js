/**
 * Marsala Volley — Prehab & Mobilizzazione Database & Core Engine
 * Archivio autonomo certificato, offline-first, con link permanenti per atleta.
 */

const PREHAB_DEFAULT_PROGRAMS = {
  "prog_veronica_allasia": {
    "id": "prog_veronica_allasia",
    "title": "prehab allasia 1",
    "athNum": 1,
    "athName": "Veronica Allasia",
    "flags": "Instabilità caviglia DX, stress tibiale",
    "volume": "solo sx x3",
    "exercises": [
      {
        "name": "Single Leg Balance - Foam Pad",
        "statType": "Hold",
        "statVal": "30\"s",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/e35/e350ede3-f2ae-5f48-9a37-b0c3900b1567/SMALL/Single-Leg-Balance-Foam-Pad1.png",
          "https://prod-images.theprehabguys.com/exercises/39e/39eb28c9-329c-5e86-bda2-db546f2d20f5/SMALL/Single-Leg-Balance-Foam-Pad2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=Y_afiShsG97q6RBbAhycE70SjtLTfA207E1GA3OfdbQ&expires=1789352072&token_path=%2F088f2d40-4852-48e4-805f-5e3e582914e9%2F/088f2d40-4852-48e4-805f-5e3e582914e9/play_720p.mp4",
        "how": "Posizionati in appoggio monopodalico su un cuscino propriocettivo (foam pad). Mantieni ginocchio e anca leggermente flessi, bacino livellato e braccia rilassate o lungo i fianchi. Fissa un punto avanti per favorire l'equilibrio.",
        "feel": "Attivazione intensa dei muscoli intrinseci del piede, stabilizzatori della caviglia (tibiale posteriore e peronieri) e medio gluteo.",
        "comp": "Non iperestendere il ginocchio (non bloccarlo indietro). Non inclinare il busto lateralmente per compensare le oscillazioni."
      },
      {
        "name": "Side Plank - On Knees, Clam, Band",
        "statType": "Reps",
        "statVal": "8+8",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/1f9/1f955883-d566-554a-9791-84ded4ac0461/SMALL/Side-Plank-On-Knees-Clam-Band.jpg",
          "https://prod-images.theprehabguys.com/exercises/9dc/9dc12c33-36e4-565d-8d95-261bd3811e1d/SMALL/Side-Plank-On-Knees-Clam-Band1.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=myvzc_C_qvNZltNlHmfjInWEm04WYqsDU7MI-lxd_ZA&expires=1789352073&token_path=%2Fb9dd6d4d-034f-4857-b87e-07f80086580f%2F/b9dd6d4d-034f-4857-b87e-07f80086580f/play_720p.mp4",
        "how": "Posizionati sul fianco in appoggio su gomito e ginocchia piegate a 90°, con un elastico attorno alle ginocchia. Solleva il bacino allineando spalle, anche e ginocchia; contemporaneamente apri il ginocchio superiore mantenendo i talloni a contatto.",
        "feel": "Forte contrazione del medio gluteo della gamba superiore e lavoro isometrico di core e anca del lato a terra.",
        "comp": "Non far ruotare il bacino all'indietro durante l'apertura. Mantieni il bacino alto senza farlo cedere verso il pavimento."
      },
      {
        "name": "Split Stance Lunge - RNT",
        "statType": "Reps",
        "statVal": "8+8",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/29e/29efcac3-d29b-5ce2-a964-f2fcd1dca372/SMALL/Split-Stance-Lunge-RNT1.png",
          "https://prod-images.theprehabguys.com/exercises/d83/d8349582-0ad0-5f34-9fdb-801417754b69/SMALL/Split-Stance-Lunge-RNT2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=JzVBbB3bxuD0wm1qkrQytbqIaow6B-muoSZCRGKhZPE&expires=1789352074&token_path=%2Fcae1d904-27ab-4d92-912d-5f57780186af%2F/cae1d904-27ab-4d92-912d-5f57780186af/play_720p.mp4",
        "how": "Posizionati in split stance (affondo statico) con un elastico che traziona il ginocchio anteriore verso l'interno (valgo). Scendi in affondo verticale opponendoti attivamente alla resistenza dell'elastico per mantenere il ginocchio perfettamente allineato al 2° dito del piede.",
        "feel": "Attivazione mirata del medio gluteo per contrastare il valgismo dinamico, assieme a quadricipiti e grande gluteo.",
        "comp": "Non cedere alla trazione dell'elastico (evita il collasso mediale del ginocchio). Mantieni il busto eretto senza oscillare."
      },
      {
        "name": "Shoulder Prep - Band",
        "statType": "Reps",
        "statVal": "6+6+6",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/ccd/ccd95c22-4eba-57f0-acaf-e26d6dfea40c/SMALL/Shoulder-Prep-Band.jpg",
          "https://prod-images.theprehabguys.com/exercises/21e/21e8e052-4cc8-51eb-b22e-d0ef80078852/SMALL/Shoulder-Prep-Band1.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=T8mWJNqZnWXnRSFdV_nEe3NPK4BtVAdZncg2Ugde3Nk&expires=1789352075&token_path=%2F3fcb1174-bc44-4608-a6de-2f3556219b9f%2F/3fcb1174-bc44-4608-a6de-2f3556219b9f/play_720p.mp4",
        "how": "Con un elastico tra le mani, esegui movimenti combinati di extrarotazione delle spalle, retrazione scapolare a gomiti flessi e dislocazioni controllate a braccia tese.",
        "feel": "Calore e attivazione profonda della cuffia dei rotatori (sottospinato e piccolo rotondo) e stabilizzatori scapolari (trapezio inferiore e romboidi).",
        "comp": "Non inarcare la schiena (colonna lombare neutra). Non sollevare le spalle verso le orecchie."
      }
    ]
  },
  "prog_maria_marcuzzi": {
  "id": "prog_maria_marcuzzi",
  "title": "Marcuzzi 1",
  "athNum": 2,
  "athName": "Maria Marcuzzi",
  "flags": "Spalla DX debole, deficit podalico bilaterale",
  "volume": "3x",
  "exercises": [
    {
      "name": "Single Leg Hip Thrust",
      "statType": "Reps",
      "statVal": "10+10",
      "notes": "",
      "images": [
        "https://prod-images.theprehabguys.com/exercises/99d/99df7b8c-1b4d-5cb0-81a2-185fd13f7fa7/SMALL/Single-Leg-Hip-Thrust1.png",
        "https://prod-images.theprehabguys.com/exercises/ebf/ebffd6e0-253e-5d5e-97ac-64f8048673b6/SMALL/Single-Leg-Hip-Thrust2.png"
      ],
      "mp4": "https://videos.theprehabguys.com/bcdn_token=aVevmYKkG3_BzM3DfqCVFs5Qj97vU12-vuQbT50DV7k&expires=1789352075&token_path=%2F4523a0b6-f7d4-4425-8948-5966397088b5%2F/4523a0b6-f7d4-4425-8948-5966397088b5/play_720p.mp4",
      "how": "Spalle in appoggio su una panca o box, un piede a terra a 90° e l'altra gamba raccolta a 90° in aria. Spingi attraverso il tallone a terra estendendo completamente l'anca fino ad allineare coscia, bacino e busto.",
      "feel": "Massima contrazione del grande gluteo e della catena posteriore della gamba in appoggio.",
      "comp": "Non inarcare la zona lombare a fine corsa: l'estensione deve avvenire dall'anca mantenendo l'addome attivo."
    },
    {
      "name": "Shoulder Prep - Band",
      "statType": "Reps",
      "statVal": "6+6+6",
      "notes": "",
      "images": [
        "https://prod-images.theprehabguys.com/exercises/ccd/ccd95c22-4eba-57f0-acaf-e26d6dfea40c/SMALL/Shoulder-Prep-Band.jpg",
        "https://prod-images.theprehabguys.com/exercises/21e/21e8e052-4cc8-51eb-b22e-d0ef80078852/SMALL/Shoulder-Prep-Band1.jpg"
      ],
      "mp4": "https://videos.theprehabguys.com/bcdn_token=T8mWJNqZnWXnRSFdV_nEe3NPK4BtVAdZncg2Ugde3Nk&expires=1789352075&token_path=%2F3fcb1174-bc44-4608-a6de-2f3556219b9f%2F/3fcb1174-bc44-4608-a6de-2f3556219b9f/play_720p.mp4",
      "how": "Con un elastico tra le mani, esegui movimenti combinati di extrarotazione delle spalle, retrazione scapolare a gomiti flessi e dislocazioni controllate a braccia tese.",
      "feel": "Calore e attivazione profonda della cuffia dei rotatori (sottospinato e piccolo rotondo) e stabilizzatori scapolari (trapezio inferiore e romboidi).",
      "comp": "Non inarcare la schiena (colonna lombare neutra). Non sollevare le spalle verso le orecchie."
    },
    {
      "name": "Single Leg Heel Raise - Eversion Bias, Wall Supported",
      "statType": "Reps",
      "statVal": "8+8",
      "notes": "",
      "images": [
        "https://prod-images.theprehabguys.com/exercises/b73/b739399c-5484-59b8-b94d-823b1a5d3128/SMALL/Single-Leg-Heel-Raise-Eversion-Bias-Wall-Supported-1.jpg",
        "https://prod-images.theprehabguys.com/exercises/3f2/3f257278-d3ba-5cc8-af53-7e97f6c106c2/SMALL/Single-Leg-Heel-Raise-Eversion-Bias-Wall-Supported-2.jpg"
      ],
      "mp4": "https://iframe.mediadelivery.net/embed/141812/6b273297-34ae-48ae-b3e1-ae9e536c3a29",
      "how": "In piedi accanto a una parete, mano interna in appoggio. Solleva la gamba interna e mantieni il carico sulla gamba esterna. Spingi verso l'alto sollevando il tallone, concentrando la spinta sull'alluce (eversione attiva) e contraendo il polpaccio in cima. Ritorna in basso lentamente.",
      "feel": "Lavoro intenso del polpaccio e del tibiale posteriore con enfasi sull'arco mediale del piede.",
      "comp": "Mantieni il ginocchio disteso senza piegarlo. Usa la parete solo per equilibrio e non per spingerti su."
    },
    {
      "name": "Single Leg Reach - Frontal",
      "statType": "Reps",
      "statVal": "6+6",
      "notes": "",
      "images": [
        "https://prod-images.theprehabguys.com/exercises/4b7/4b7de375-5d2a-542e-9c4a-a25c80e40e1d/SMALL/Single-Leg-Reach-Frontal-1.png",
        "https://prod-images.theprehabguys.com/exercises/d71/d716c366-d51c-58b8-aa07-709c3ef1c4a1/SMALL/Single-Leg-Reach-Frontal-2.png"
      ],
      "mp4": "https://iframe.mediadelivery.net/embed/141812/c7cd81c5-39ed-4e11-b7be-69f10323f2d7",
      "how": "In appoggio su una gamba, fletti leggermente il ginocchio d'appoggio ed estendi l'altra gamba lateralmente toccando terra con la punta del piede. Mantieni l'equilibrio monopodalico e richiama la gamba controllando il movimento.",
      "feel": "Attivazione profonda del medio gluteo, stabilizzatori dell'anca e della caviglia della gamba in appoggio.",
      "comp": "Mantieni il busto e le spalle orientati in avanti senza ruotare il tronco verso il lato di allungo."
    }
  ]
},
  "prog_victoria_sassolini": {
    "id": "prog_victoria_sassolini",
    "title": "sassolini 1",
    "athNum": 3,
    "athName": "Victoria Sassolini",
    "flags": "Pregressa frattura tibia DX, rigidità anca SX, sovraccarico lombare",
    "volume": "3x",
    "exercises": [
      {
        "name": "Split Stance Pallof - Press",
        "statType": "Reps",
        "statVal": "8+8",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/04f/04f08d46-0bd7-4c46-a672-5f1cdc601ef6/SMALL/split-stance-pallof-press.gif",
          "https://prod-images.theprehabguys.com/exercises/04f/04f08d46-0bd7-4c46-a672-5f1cdc601ef6/SMALL/split-stance-pallof-press.gif"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=l215pfNd2WGJ1CmPlo2-MDBRUeY5pboPAA4fnE8CCK4&expires=1789352076&token_path=%2F560b739f-50d8-4ec4-9734-4c1903d316bc%2F/560b739f-50d8-4ec4-9734-4c1903d316bc/play_720p.mp4",
        "how": "In posizione di mezzo affondo (split stance), perpendicolare a un cavo o elastico ancorato lateralmente. Porta le mani al centro del petto ed estendi le braccia in avanti resistendo alla forza di rotazione.",
        "feel": "Forte attivazione anti-rotazionale del core (obliqui, trasverso dell'addome) e stabilità pelvica.",
        "comp": "Non farti ruotare le spalle o il bacino verso l'ancoraggio. Spalle basse e lontane dalle orecchie."
      },
      {
        "name": "Single Leg Bridge - Leg Bent",
        "statType": "Reps",
        "statVal": "8+8",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/c2e/c2e178e5-3232-581d-b03b-b8e5d5f2ce4f/SMALL/Single-Leg-Bridge-Leg-Bent.jpg",
          "https://prod-images.theprehabguys.com/exercises/a72/a7250f3a-92fd-563c-bce6-6cd58c7a1f26/SMALL/Single-Leg-Bridge-Leg-Bent1.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=lYINuZLMOTqQdf-JWqnMFfvZHYpp9n1c1ZzwXsVS56A&expires=1789352077&token_path=%2F0127c33c-f440-44d0-9bbe-d0226eef4a80%2F/0127c33c-f440-44d0-9bbe-d0226eef4a80/play_720p.mp4",
        "how": "Sdraiata supina con un ginocchio flesso e piede a terra, l'altra gamba raccolta al petto. Spingi dal tallone sollevando il bacino da terra fino a completare l'estensione dell'anca.",
        "feel": "Isolamento del grande gluteo e bicipite femorale, controllo stabilità del bacino.",
        "comp": "Non spingere con la punta del piede. Non iperestendere la zona lombare a fine movimento."
      },
      {
        "name": "Side Plank - On Knees, Hip Abduction",
        "statType": "Reps",
        "statVal": "8+8",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/708/7083d7a9-ab5e-5e78-8776-547721e755c3/SMALL/Side-Plank-On-Knees-Hip-Abduction1.png",
          "https://prod-images.theprehabguys.com/exercises/e9c/e9cca273-3e8d-5e87-99c0-f52df34ad257/SMALL/Side-Plank-On-Knees-Hip-Abduction2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=drS1qEUGvFFPqy28_u6nkOZLZypMR_VNUk-c4lsdIBw&expires=1789352078&token_path=%2Fccb43a4b-89d3-4747-9960-2478db1b44c6%2F/ccb43a4b-89d3-4747-9960-2478db1b44c6/play_720p.mp4",
        "how": "In side plank su gomito e ginocchio a terra. Solleva il bacino e contemporaneamente solleva la gamba superiore tesa verso l'alto mantenendo il piede a martello.",
        "feel": "Medio gluteo bilaterale (stabilizzatore a terra e dinamico in alto) e muscoli obliqui del tronco.",
        "comp": "Non ruotare il bacino avanti o indietro. Non flettere la gamba in avanti durante il sollevamento."
      }
    ]
  },
  "prog_anja_asonja": {
    "id": "prog_anja_asonja",
    "title": "anja 1",
    "athNum": 4,
    "athName": "Anja Asonja",
    "flags": "Bilateral patellar tendinopathy, stiff right shoulder",
    "volume": "2 sets",
    "exercises": [
      {
        "name": "Thoracic Spine Mobilization - Overhead Reach",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/6c3/6c387e9d-ef58-5263-bbff-51b91f0a9fa1/SMALL/Thoracic-Spine-Mobilization-Overhead-Reach.jpg",
          "https://prod-images.theprehabguys.com/exercises/fc6/fc699ecb-3c51-57d0-990e-35ab901d39e6/SMALL/Thoracic-Spine-Mobilization-Overhead-Reach1.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=p48SvLWjfUJVwBP0mCYj1jY0XJDz1bClvUbmSHC9f_w&expires=1789352079&token_path=%2F377d2de7-0f39-4e18-995d-549cda42fa02%2F/377d2de7-0f39-4e18-995d-549cda42fa02/play_720p.mp4",
        "how": "Sit back on your heels with your arms extended forward on a box or Swiss ball. Keep your pelvis fixed and gently allow your chest to sink toward the floor, extending through your mid and upper back (thoracic spine).",
        "feel": "Stretch along the latissimus dorsi and extension mobility through the thoracic spine and shoulder girdle.",
        "comp": "Do not arch your lower back (lumbar spine): the extension must come strictly from your upper and mid back."
      },
      {
        "name": "Thoracic Spine Mobilization - Swissball",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/00d/00d8592b-9880-55d6-afb7-d23c31c1ea24/SMALL/Thoracic-Spine-Mobilization-Swissball-1.png",
          "https://prod-images.theprehabguys.com/exercises/22a/22a8bc3c-87eb-5aa5-ac6a-b3d890d387a1/SMALL/Thoracic-Spine-Mobilization-Swissball-2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=mCG6Po-bEQ1YvFp6oW14xdyeFyF12EYuJFAu9Ljzbq4&expires=1789352080&token_path=%2Fd6d87119-b8f5-43ec-80d5-94441e038e49%2F/d6d87119-b8f5-43ec-80d5-94441e038e49/play_720p.mp4",
        "how": "Kneel in front of the Swiss ball and rest your forearms on top of the ball. Roll the ball forward while exhaling, allowing your chest to drop toward the floor, then return smoothly while inhaling.",
        "feel": "Opening of the rib cage, relief between the shoulder blades, and enhanced mobility in the shoulders and upper back.",
        "comp": "Do not force through pinching shoulder pain. Keep the movement smooth, fluid, and controlled."
      },
      {
        "name": "Quadruped Thread The Needle To Open Book",
        "statType": "Reps",
        "statVal": "6+6",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/856/8567ed39-ce99-44e0-8c4d-854954f3bb9e/SMALL/quadruped-thread-the-needle-to-open-book.gif",
          "https://prod-images.theprehabguys.com/exercises/856/8567ed39-ce99-44e0-8c4d-854954f3bb9e/SMALL/quadruped-thread-the-needle-to-open-book.gif"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=JTgvfOeOJ_ZO17dCmhLoSYNlwB3C0Q4dTVYUs16XqPE&expires=1789352081&token_path=%2Fd022a22b-a1ae-4046-8d88-c8fada2cbe63%2F/d022a22b-a1ae-4046-8d88-c8fada2cbe63/play_720p.mp4",
        "how": "On hands and knees in a quadruped position, thread one arm underneath your torso, rotating your chest toward the floor. Then reverse the motion, opening that same arm up toward the ceiling, rotating your chest and following your hand with your eyes.",
        "feel": "Rotational mobility in the thoracic spine and a stretch through the periscapular and pectoral muscles.",
        "comp": "Do not shift your hips side to side: your pelvis and hips must stay square and centered over your knees."
      },
      {
        "name": "Arm Bar - Half Rotation, Kettlebell",
        "statType": "Reps",
        "statVal": "5+5",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/44a/44a8a2e7-eabe-595b-a78b-4b700fc7f2df/SMALL/Arm-Bar-Half-Rotation-Kettlebell1.png",
          "https://prod-images.theprehabguys.com/exercises/0d5/0d5cff03-e19d-5226-9320-96325a45e45b/SMALL/Arm-Bar-Half-Rotation-Kettlebell2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=cB5m2ZefWTZPgGLEeQHy3Cf1vf_UKa91jJjNTZFd7wU&expires=1789352082&token_path=%2F202587ba-d347-4a51-b6ad-2c5a800650ee%2F/202587ba-d347-4a51-b6ad-2c5a800650ee/play_720p.mp4",
        "how": "Lie on your back holding a kettlebell with your arm locked straight toward the ceiling. Slowly roll onto your side while keeping the kettlebell perfectly vertical and your eyes fixed on the weight at all times.",
        "feel": "Deep rotator cuff and serratus anterior activation and dynamic shoulder stability.",
        "comp": "Do not bend your elbow: keep your arm locked straight and solid like a load-bearing pillar throughout."
      }
    ]
  },
  "prog_chiara_lo_dico": {
    "id": "prog_chiara_lo_dico",
    "title": "lo dico 1",
    "athNum": 5,
    "athName": "Chiara Lo Dico",
    "flags": "Osgood-Schlatter ginocchio DX, valgismo dinamico",
    "volume": "2x",
    "exercises": [
      {
        "name": "Calf Foam Rolling",
        "statType": "Hold",
        "statVal": "90s",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/980/980237d2-693f-5f91-9d11-e9a77c94eef0/SMALL/Calf-Foam-Rolling1-1.png",
          "https://prod-images.theprehabguys.com/exercises/305/30525707-04fe-579e-ac2c-9bb68da56a03/SMALL/Calf-Foam-Rolling2-1.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=4QXUlX1deFDN9MCj9QcHtqQiJrrf-MDcTbHHHJN-v5Y&expires=1789352083&token_path=%2Ff52435da-ff73-480a-8d2f-a44c4bbe2d2f%2F/f52435da-ff73-480a-8d2f-a44c4bbe2d2f/play_720p.mp4",
        "how": "Seduta a terra con il foam roller posizionato sotto il polpaccio. Solleva il bacino e rotola lentamente dalla caviglia a poco sotto il ginocchio, fermandoti sui punti contratti.",
        "feel": "Rilascio miofasciale e riduzione della tensione sul tricipite surale e tendine d'Achille.",
        "comp": "Non passare direttamente dietro l'articolazione del ginocchio (cavo popliteo)."
      },
      {
        "name": "Foot Plantar Surface Self Massage - Lacrosse Ball",
        "statType": "Hold",
        "statVal": "90s",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/11c/11cb0605-0bca-5def-98f1-d6e540e7a458/SMALL/Foot-Plantar-Surface-Self-Massage-Lacrosse-Ball1.png",
          "https://prod-images.theprehabguys.com/exercises/8cf/8cfabff6-fe5a-5c60-8f4f-906f88314023/SMALL/Foot-Plantar-Surface-Self-Massage-Lacrosse-Ball2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=nThLt5WOgSdr3IcPrItXBDbKF6L7gT-hl4j-ixLqo9c&expires=1789352084&token_path=%2Fe9b0aa7f-dbf1-4f7e-8037-1be17f587d39%2F/e9b0aa7f-dbf1-4f7e-8037-1be17f587d39/play_720p.mp4",
        "how": "In piedi o seduta, posiziona una pallina da lacrosse sotto la pianta del piede. Esegui pressioni circolari e longitudinali dal tallone all'avampiede applicando un carico tollerabile.",
        "feel": "Rilassamento e distensione della fascia plantare e dei muscoli flessori brevi delle dita.",
        "comp": "Non premere con forza eccessiva tale da provocare dolore acuto o contrazione di difesa."
      },
      {
        "name": "90/90 Hip Lift Off - Internal Rotation, External Rotation",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/d61/d6178dc5-926b-56d6-a3bb-b5bf30589815/SMALL/9090-Hip-Lift-Off-1.png",
          "https://prod-images.theprehabguys.com/exercises/7c7/7c7a8104-2cae-55c1-802a-44dd8e13ed50/SMALL/9090-Hip-Lift-Off2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=9Az9YfkezGWVtEEYHqkkX_cgIWG1aY9UD0xQPU7xZYY&expires=1789352085&token_path=%2Fd3ebb8c7-c830-45d0-8cd4-76b1cd537bdd%2F/d3ebb8c7-c830-45d0-8cd4-76b1cd537bdd/play_720p.mp4",
        "how": "Seduta a terra con gambe in posizione 90/90 (un'anca in rotazione esterna a 90°, l'altra in rotazione interna a 90°). Mantenendo il tronco saldo ed eretto, solleva attivamente il piede o il ginocchio della gamba posteriore (lift off) senza inclinare la schiena.",
        "feel": "Attivazione dei rotatori interni ed esterni dell'anca a fine corsa articolare (capsula dell'anca).",
        "comp": "Non inclinare il busto per aiutarti nel sollevamento: isola l'articolazione coxo-femorale."
      },
      {
        "name": "Ankle Dorsiflexion Mobilization - Dynamic, Box",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/fb4/fb4b9a24-6489-5274-85cd-92528837b3c7/SMALL/Ankle-Dorsiflexion-Mobilization-Dynamic-Box1-2.jpg",
          "https://prod-images.theprehabguys.com/exercises/92f/92f81478-fe9a-5fbc-8210-34acaf1cfda6/SMALL/Ankle-Dorsiflexion-Mobilization-Dynamic-Box1.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=ErJ72bvLkaOtymEX_P0XbTKEzzBwaULDqw6AsZNIOtg&expires=1789352086&token_path=%2F09f5fd72-c573-46f8-96da-4f690f7105b9%2F/09f5fd72-c573-46f8-96da-4f690f7105b9/play_720p.mp4",
        "how": "Piede appoggiato su un box o panca, l'altra gamba a terra. Porta il ginocchio in avanti oltre la linea delle dita mantenendo il tallone rigorosamente attaccato al piano d'appoggio.",
        "feel": "Allungamento del soleo e incremento dell'escursione articolare in dorsiflessione tibio-tarsica.",
        "comp": "Non permettere al tallone di staccarsi dal box. Evita che il ginocchio collassi verso l'interno."
      },
      {
        "name": "90/90 Hip Lift Off - Internal Rotation, External Rotation",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/d61/d6178dc5-926b-56d6-a3bb-b5bf30589815/SMALL/9090-Hip-Lift-Off-1.png",
          "https://prod-images.theprehabguys.com/exercises/7c7/7c7a8104-2cae-55c1-802a-44dd8e13ed50/SMALL/9090-Hip-Lift-Off2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=9Az9YfkezGWVtEEYHqkkX_cgIWG1aY9UD0xQPU7xZYY&expires=1789352085&token_path=%2Fd3ebb8c7-c830-45d0-8cd4-76b1cd537bdd%2F/d3ebb8c7-c830-45d0-8cd4-76b1cd537bdd/play_720p.mp4",
        "how": "Seduta a terra con gambe in posizione 90/90 (un'anca in rotazione esterna a 90°, l'altra in rotazione interna a 90°). Mantenendo il tronco saldo ed eretto, solleva attivamente il piede o il ginocchio della gamba posteriore (lift off) senza inclinare la schiena.",
        "feel": "Attivazione dei rotatori interni ed esterni dell'anca a fine corsa articolare (capsula dell'anca).",
        "comp": "Non inclinare il busto per aiutarti nel sollevamento: isola l'articolazione coxo-femorale."
      },
      {
        "name": "Bent Over Single Arm Lat Pull Down - Band",
        "statType": "Reps",
        "statVal": "8",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/9c3/9c31f147-1735-44b6-ae41-068c3b09d0b6/SMALL/Bent-Over-Single-Arm-Lat-Pull-Down-Band1.png",
          "https://prod-images.theprehabguys.com/exercises/c64/c643c3c8-4630-4816-9975-2fd282c29359/SMALL/Bent-Over-Single-Arm-Lat-Pull-Down-Band2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=fimTciDnTel0glWd-OXRZPy-WsHzhv4azKQpfHAZqm8&expires=1789352087&token_path=%2Fb5ce7325-b23c-40a2-9f0b-b6d0f2819d39%2F/b5ce7325-b23c-40a2-9f0b-b6d0f2819d39/play_720p.mp4",
        "how": "Busto flesso a 45°, un braccio afferra un elastico ancorato in alto. Tira il gomito verso l'anca deprimendo la scapola e stringendo il gran dorsale a fine corsa.",
        "feel": "Attivazione selettiva del gran dorsale e dei muscoli depressori e adduttori della scapola.",
        "comp": "Non ruotare il tronco verso il lato che tira. Non tirare tirando il polso, guida il movimento con il gomito."
      }
    ]
  },
  "prog_gaia_biondi": {
    "id": "prog_gaia_biondi",
    "title": "biondi 1",
    "athNum": 6,
    "athName": "Gaia Biondi",
    "flags": "Dolore rotuleo attivo ginocchio DX, fascite plantare SX",
    "volume": "2x",
    "exercises": [
      {
        "name": "Quadriceps Foam Rolling",
        "statType": "Reps",
        "statVal": "90\"",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/b3b/b3b85e87-ac9a-54a0-b5ee-17a9668ed484/SMALL/Quadriceps-Foam-Rolling1.png",
          "https://prod-images.theprehabguys.com/exercises/a74/a743d304-7ca6-5b55-a9d6-46e66552d864/SMALL/Quadriceps-Foam-Rolling2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=tULHgqU-nco1wdqdeirypR1LClHNqnzL7PnxBTiIeuQ&expires=1789352088&token_path=%2F8257c085-e06c-4cdd-a8d1-580447839f27%2F/8257c085-e06c-4cdd-a8d1-580447839f27/play_720p.mp4",
        "how": "Sdraiata prona con il rullo posizionato sotto la parte anteriore della coscia. Esegui passaggi lenti dal bacino a sopra la rotula, ruotando leggermente la gamba per massaggiare anche i vasti.",
        "feel": "De-tensione miofasciale del retto femorale e quadricipite prima del lavoro di forza.",
        "comp": "Non rullare direttamente sopra la rotula."
      },
      {
        "name": "Psoas Soft Tissue Mobilization  - Lacrosse Ball",
        "statType": "Reps",
        "statVal": "90\"",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/9e4/9e46aede-0acb-5c1a-a6f4-e3d031ce6be7/SMALL/Psoas-soft-tissue-mobilization-lacrosse-ball-02.jpg",
          "https://prod-images.theprehabguys.com/exercises/dc6/dc6d045c-2c32-54a8-bd3d-3a4950bd5cb4/SMALL/Psoas-soft-tissue-mobilization-lacrosse-ball-01.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=HNSdSASQQtJ-16bKIBcXTof6yPoZfbZ8hl63e4wwPRk&expires=1789352089&token_path=%2F7292b175-31b0-4ef0-8c4b-49659aa0fda8%2F/7292b175-31b0-4ef0-8c4b-49659aa0fda8/play_720p.mp4",
        "how": "Sdraiata prona a terra, posiziona la pallina da lacrosse tra l'ombelico e la spina iliaca antero-superiore. Rilassa la muscolatura addominale e respira profondamente permettendo alla pallina di affondare.",
        "feel": "Rilascio profondo dell'ileopsoas e dei flessori dell'anca.",
        "comp": "Non effettuare spinte brusche. Se avverti un battito arterioso pulsante pronunciato, sposta leggermente la pallina."
      },
      {
        "name": "Supine Hip External Rotation Stretch",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/be9/be917feb-256f-5395-b7c5-f7dd1aa35911/SMALL/Supine-Hip-External-Rotation-Stretch1.png",
          "https://prod-images.theprehabguys.com/exercises/8ac/8ac773e1-6086-5bdf-a139-ca73d99151cb/SMALL/Supine-Hip-External-Rotation-Stretch2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=4yjUzwUIZe1QB9Zr-rEMsYSiSospZdafP1mcnHFEqS8&expires=1789352089&token_path=%2Fdb63e831-4d14-4816-801e-445caa47f620%2F/db63e831-4d14-4816-801e-445caa47f620/play_720p.mp4",
        "how": "Supina a terra, appoggia la caviglia di una gamba sul ginocchio opposto formando un 4. Afferra la coscia a terra e tirala verso il petto fino ad avvertire tensione nel gluteo.",
        "feel": "Allungamento profondo del piriforme e rotatori esterni dell'anca.",
        "comp": "Non sollevare la testa o l'osso sacro dal pavimento durante la trazione."
      },
      {
        "name": "Supine Hip External Rotation - Band",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/d7b/d7bb857c-2573-5271-9006-5c554c558f56/SMALL/Supine-Hip-External-Rotation-Band-1.jpg",
          "https://prod-images.theprehabguys.com/exercises/221/221d9a90-bfbf-5d8e-9e14-1eecab454653/SMALL/Supine-Hip-External-Rotation-Band-2.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=qqoR_2cLCm6Z3P-McfB_M_XNphm826a2j_52MIKiq0o&expires=1789352090&token_path=%2F3f81fc7a-5e06-4d47-92cb-1499baea92dc%2F/3f81fc7a-5e06-4d47-92cb-1499baea92dc/play_720p.mp4",
        "how": "Supina a terra con elastico posizionato attorno ai piedi o ginocchia. Ruota esternamente le anche allontanando le ginocchia e mantenendo la tensione per 2 secondi a fine corsa.",
        "feel": "Attivazione dei rotatori esterni e stabilizzatori dell'anca.",
        "comp": "Non inarcare la zona lombare a terra durante l'apertura delle gambe."
      },
      {
        "name": "Single Leg Short Foot",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/04b/04b31f72-79ec-56b9-b28a-e4d0645514f4/SMALL/Single-Leg-Short-Foot.png",
          "https://prod-images.theprehabguys.com/exercises/9dd/9ddd28a7-58c5-5a93-a1f7-32973a7fce24/SMALL/Single-Leg-Short-Foot.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=8YlzFuDzjs0QTkWMewLTKYvSSYQszTXzJrifcnUhEns&expires=1789352091&token_path=%2F6d91f0cc-863f-44f6-ace3-687e6897a1bd%2F/6d91f0cc-863f-44f6-ace3-687e6897a1bd/play_720p.mp4",
        "how": "In appoggio monopodalico a piedi nudi. 'Accorcia' il piede avvicinando la base del primo metatarso al tallone, sollevando attivamente la volta plantare senza arricciare le dita.",
        "feel": "Contrazione dei muscoli intrinseci del piede e attivazione del tibiale posteriore.",
        "comp": "Non flettere le dita ad artiglio: devono rimanere distese e rilassate a contatto col suolo."
      },
      {
        "name": "Scapula Retraction - Band",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/bd1/bd1dd58b-0f5b-5490-b201-c6de3fd6bd26/SMALL/Scapula-Retraction-Band1.png",
          "https://prod-images.theprehabguys.com/exercises/e90/e90e8b4f-543e-5fc3-a5f5-8d15a0927130/SMALL/Scapula-Retraction-Band2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=Xp5Kcu4k3NCp3cHUCRE0ZKNolAqjqJC6L4pC2v6AJSw&expires=1789352092&token_path=%2F6a9c525d-88ed-4d57-b641-c12391b8024b%2F/6a9c525d-88ed-4d57-b641-c12391b8024b/play_720p.mp4",
        "how": "In piedi, impugna un elastico davanti al petto a braccia tese. Separa le mani adducendo le scapole verso la colonna vertebrale mantenendo le braccia dritte.",
        "feel": "Attivazione dei romboidi, trapezio medio e posteriore delle spalle.",
        "comp": "Non alzare le spalle verso il collo e non iperestendere la zona lombare."
      }
    ]
  },
  "prog_elisa_bole": {
    "id": "prog_elisa_bole",
    "title": "bole 1",
    "athNum": 7,
    "athName": "Elisa Bole",
    "flags": "Tendinopatia quadricipitale ginocchio SX, instabilità podalica",
    "volume": "3x",
    "exercises": [
      {
        "name": "Side Plank - On Knees, Clam, Band",
        "statType": "Reps",
        "statVal": "10+10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/1f9/1f955883-d566-554a-9791-84ded4ac0461/SMALL/Side-Plank-On-Knees-Clam-Band.jpg",
          "https://prod-images.theprehabguys.com/exercises/9dc/9dc12c33-36e4-565d-8d95-261bd3811e1d/SMALL/Side-Plank-On-Knees-Clam-Band1.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=myvzc_C_qvNZltNlHmfjInWEm04WYqsDU7MI-lxd_ZA&expires=1789352073&token_path=%2Fb9dd6d4d-034f-4857-b87e-07f80086580f%2F/b9dd6d4d-034f-4857-b87e-07f80086580f/play_720p.mp4",
        "how": "Posizionati sul fianco in appoggio su gomito e ginocchia piegate a 90°, con un elastico attorno alle ginocchia. Solleva il bacino allineando spalle, anche e ginocchia; contemporaneamente apri il ginocchio superiore mantenendo i talloni a contatto.",
        "feel": "Forte contrazione del medio gluteo della gamba superiore e lavoro isometrico di core e anca del lato a terra.",
        "comp": "Non far ruotare il bacino all'indietro durante l'apertura. Mantieni il bacino alto senza farlo cedere verso il pavimento."
      },
      {
        "name": "Push Up Plus - Wall",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/cfc/cfcd9f23-680b-5cd9-96b7-67b28c0cedcb/SMALL/Push-Up-Plus-Wall1.png",
          "https://prod-images.theprehabguys.com/exercises/f91/f91573c9-3752-5659-9e1f-66124fc82012/SMALL/Push-Up-Plus-Wall2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=0tZBYJbeGn6XWPc8Ap5j7yy_s5dnuzDMoyK_Wzr23PI&expires=1789352093&token_path=%2Ff807fbb7-5c03-4be5-9554-6a6a4d7ed375%2F/f807fbb7-5c03-4be5-9554-6a6a4d7ed375/play_720p.mp4",
        "how": "Mani alla parete a larghezza spalle, braccia completamente tese. Senza piegare i gomiti, allontana il petto dalla parete spingendo le scapole in avanti (pro trazione scapolare), poi ritorna.",
        "feel": "Isolamento e attivazione del dentato anteriore (serratus anterior), fondamentale per la stabilità della spalla.",
        "comp": "Non flettere le braccia: il movimento deve avvenire unicamente attraverso lo scorrimento delle scapole."
      },
      {
        "name": "Single Leg Box Squat",
        "statType": "Reps",
        "statVal": "6+6",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/86f/86f4044c-1296-5612-b3f6-d6e9571c556f/SMALL/Single-Leg-Box-Squat1.png",
          "https://prod-images.theprehabguys.com/exercises/7c3/7c34d89f-ae3a-5b42-9c91-38e31de44154/SMALL/Single-Leg-Box-Squat2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=UmLwjKltUvN6FcRMM1MKAqPt-oD6i78tRjJss7EpzOo&expires=1789352094&token_path=%2Ff57a60ec-2d6f-4f1d-8166-b9723ef291e2%2F/f57a60ec-2d6f-4f1d-8166-b9723ef291e2/play_720p.mp4",
        "how": "In piedi su una gamba davanti a un box o panca, l'altra sollevata avanti. Scendi in modo controllato fino a sfiorare la panca con i glutei, poi risali spingendo forte dal tallone.",
        "feel": "Forza eccentrica e concentrica di quadricipite, gluteo e stabilità del ginocchio.",
        "comp": "Non far collassare il ginocchio verso l'interno (valgo). Non lasciarsi cadere di peso sul box."
      }
    ]
  },
  "prog_federica_nonnati": {
    "id": "prog_federica_nonnati",
    "title": "nonnati 1",
    "athNum": 8,
    "athName": "Federica Nonnati",
    "flags": "Spalla DX cronica dolore 4-5/10, retrazione retto femorale, sublussazione astragalo",
    "volume": "2x",
    "exercises": [
      {
        "name": "Quadriceps Foam Rolling",
        "statType": "Reps",
        "statVal": "90\"",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/b3b/b3b85e87-ac9a-54a0-b5ee-17a9668ed484/SMALL/Quadriceps-Foam-Rolling1.png",
          "https://prod-images.theprehabguys.com/exercises/a74/a743d304-7ca6-5b55-a9d6-46e66552d864/SMALL/Quadriceps-Foam-Rolling2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=tULHgqU-nco1wdqdeirypR1LClHNqnzL7PnxBTiIeuQ&expires=1789352088&token_path=%2F8257c085-e06c-4cdd-a8d1-580447839f27%2F/8257c085-e06c-4cdd-a8d1-580447839f27/play_720p.mp4",
        "how": "Sdraiata prona con il rullo posizionato sotto la parte anteriore della coscia. Esegui passaggi lenti dal bacino a sopra la rotula, ruotando leggermente la gamba per massaggiare anche i vasti.",
        "feel": "De-tensione miofasciale del retto femorale e quadricipite prima del lavoro di forza.",
        "comp": "Non rullare direttamente sopra la rotula."
      },
      {
        "name": "Foot Plantar Surface Self Massage - Lacrosse Ball",
        "statType": "Reps",
        "statVal": "90\"",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/11c/11cb0605-0bca-5def-98f1-d6e540e7a458/SMALL/Foot-Plantar-Surface-Self-Massage-Lacrosse-Ball1.png",
          "https://prod-images.theprehabguys.com/exercises/8cf/8cfabff6-fe5a-5c60-8f4f-906f88314023/SMALL/Foot-Plantar-Surface-Self-Massage-Lacrosse-Ball2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=nThLt5WOgSdr3IcPrItXBDbKF6L7gT-hl4j-ixLqo9c&expires=1789352084&token_path=%2Fe9b0aa7f-dbf1-4f7e-8037-1be17f587d39%2F/e9b0aa7f-dbf1-4f7e-8037-1be17f587d39/play_720p.mp4",
        "how": "In piedi o seduta, posiziona una pallina da lacrosse sotto la pianta del piede. Esegui pressioni circolari e longitudinali dal tallone all'avampiede applicando un carico tollerabile.",
        "feel": "Rilassamento e distensione della fascia plantare e dei muscoli flessori brevi delle dita.",
        "comp": "Non premere con forza eccessiva tale da provocare dolore acuto o contrazione di difesa."
      },
      {
        "name": "Half Kneeling Quadriceps Stretch - Dynamic, Strap",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/985/985f8dc3-1876-56d8-886f-8a2c770e389b/SMALL/posttypevimeo-videop22857-vimeo-thumbnail.jpg",
          "https://prod-images.theprehabguys.com/exercises/985/985f8dc3-1876-56d8-886f-8a2c770e389b/SMALL/posttypevimeo-videop22857-vimeo-thumbnail.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=pEeMWiAHP5FxVCsmxqeRsFJuDWyfeVil1omCfHxztJo&expires=1789352095&token_path=%2Fe0978e2e-409d-4b89-b886-b3823495ca0f%2F/e0978e2e-409d-4b89-b886-b3823495ca0f/play_720p.mp4",
        "how": "In ginocchio a terra in mezza flessione (un ginocchio avanti, uno a terra). Con una cinghia o con la mano, fletti la caviglia posteriore verso il gluteo mentre contrai il gluteo ed esegui una retroversione del bacino.",
        "feel": "Allungamento del retto femorale e dei flessori dell'anca.",
        "comp": "Non inarcare la schiena: mantieni il gluteo posteriore contratto e il bacino retroverso."
      },
      {
        "name": "Table Top Hip Internal Rotation Isometric - Wall",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/e23/e23011fb-4dac-5409-a476-24e8ff2b8448/SMALL/41.Table-Top-Hip-Internal-Rotation-Isometric-Wall.jpg",
          "https://prod-images.theprehabguys.com/exercises/40b/40b5e596-89fa-5a29-b41b-8d9119a56cb1/SMALL/42.Table-Top-Hip-Internal-Rotation-Isometric-Wall.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=KdUQihJd1Ida6TiHWMmvn9y-bwv6pRSq1PN2RyLUL5Y&expires=1789352095&token_path=%2Fa149c1c2-f720-478d-b028-492c6f7d19d6%2F/a149c1c2-f720-478d-b028-492c6f7d19d6/play_720p.mp4",
        "how": "Supina a terra con anche e ginocchia a 90° (posizione a tavolino), caviglie esterne contro una parete. Spingi isometricamente i piedi verso l'esterno ruotando internamente le anche contro il muro.",
        "feel": "Attivazione dei rotatori interni dell'anca (tensore della fascia lata, piccolo gluteo).",
        "comp": "Non muovere il bacino, mantieni la zona lombare a contatto con il suolo."
      },
      {
        "name": "Single Leg Short Foot",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/04b/04b31f72-79ec-56b9-b28a-e4d0645514f4/SMALL/Single-Leg-Short-Foot.png",
          "https://prod-images.theprehabguys.com/exercises/9dd/9ddd28a7-58c5-5a93-a1f7-32973a7fce24/SMALL/Single-Leg-Short-Foot.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=8YlzFuDzjs0QTkWMewLTKYvSSYQszTXzJrifcnUhEns&expires=1789352091&token_path=%2F6d91f0cc-863f-44f6-ace3-687e6897a1bd%2F/6d91f0cc-863f-44f6-ace3-687e6897a1bd/play_720p.mp4",
        "how": "In appoggio monopodalico a piedi nudi. 'Accorcia' il piede avvicinando la base del primo metatarso al tallone, sollevando attivamente la volta plantare senza arricciare le dita.",
        "feel": "Contrazione dei muscoli intrinseci del piede e attivazione del tibiale posteriore.",
        "comp": "Non flettere le dita ad artiglio: devono rimanere distese e rilassate a contatto col suolo."
      },
      {
        "name": "Wall Slide - Foam Roller",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/f55/f5577186-5fb9-5b73-8f2a-663c7cb66fc2/SMALL/Wall-Slide-Foam-Roller1.png",
          "https://prod-images.theprehabguys.com/exercises/1b1/1b1415dd-aa00-557d-98fb-460ac53b7676/SMALL/Wall-Slide-Foam-Roller2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=KjTrcFUAmxtRJa9BFyKVLR4e8A2LU7CUWNZ40V_FZU0&expires=1789352096&token_path=%2F45c5a32a-a03c-450b-875e-bafb93e2015e%2F/45c5a32a-a03c-450b-875e-bafb93e2015e/play_720p.mp4",
        "how": "In piedi davanti a una parete con un foam roller posizionato tra gli avambracci e il muro. Fai scivolare il rullo verso l'alto mantenendo una leggera pressione in avanti e allungando le braccia a fine corsa.",
        "feel": "Attivazione del dentato anteriore e rotazione superiore fisiologica della scapola.",
        "comp": "Non inarcare la schiena in alto. Non far cadere i gomiti all'esterno."
      }
    ]
  },
  "prog_sara_dodi": {
    "id": "prog_sara_dodi",
    "title": "dodi 1",
    "athNum": 9,
    "athName": "Sara Dodi",
    "flags": "Ricostruzione LCA + menisco SX, menisco DX, cervicalgia severa",
    "volume": "3x",
    "exercises": [
      {
        "name": "Quadruped Thread The Needle To Open Book",
        "statType": "Reps",
        "statVal": "4+4",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/856/8567ed39-ce99-44e0-8c4d-854954f3bb9e/SMALL/quadruped-thread-the-needle-to-open-book.gif",
          "https://prod-images.theprehabguys.com/exercises/856/8567ed39-ce99-44e0-8c4d-854954f3bb9e/SMALL/quadruped-thread-the-needle-to-open-book.gif"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=JTgvfOeOJ_ZO17dCmhLoSYNlwB3C0Q4dTVYUs16XqPE&expires=1789352081&token_path=%2Fd022a22b-a1ae-4046-8d88-c8fada2cbe63%2F/d022a22b-a1ae-4046-8d88-c8fada2cbe63/play_720p.mp4",
        "how": "In quadrupedia a terra, infila un braccio sotto il busto ruotando il torace verso terra, poi apri lo stesso braccio verso l'alto ruotando il torace verso il soffitto e seguendo la mano con gli occhi.",
        "feel": "Mobilità rotazionale della colonna dorsale e distensione della muscolatura periscapolare e pettorale.",
        "comp": "Non traslare lateralmente il bacino: le anche devono rimanere bloccate e centrate rispetto alle ginocchia."
      },
      {
        "name": "Isometric Lateral Raise - Band",
        "statType": "Hold",
        "statVal": "10 a 30\"s",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/c1e/c1e9685d-3573-59fe-a284-4644facf391b/SMALL/Isometric-Lateral-Raise-Band-1.png",
          "https://prod-images.theprehabguys.com/exercises/42c/42c279b7-1d40-56a6-9c79-614cc7bcdc6f/SMALL/Isometric-Lateral-Raise-Band-2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=hiuU0Ej0yzkCwShhwBzsIPmAhPlgaMRWXcmu-_axTKY&expires=1789352097&token_path=%2F42bda629-31bc-48f0-9558-f9b8cdb0bd91%2F/42bda629-31bc-48f0-9558-f9b8cdb0bd91/play_720p.mp4",
        "how": "In piedi sopra un elastico, solleva le braccia lateralmente a circa 75-80° (piano scapolare). Mantieni la tenuta isometrica per il tempo target respirando con regolarità.",
        "feel": "Lavoro isometrico sul deltoide e cuffia dei rotatori senza attrito sub-acromiale.",
        "comp": "Non sollevare le braccia oltre l'orizzontale. Non incassare il collo nelle spalle."
      },
      {
        "name": "Bicep Curl - Band",
        "statType": "Hold",
        "statVal": "30\"s",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/9c3/9c30e466-641f-54af-bf11-e2739dd8ca72/SMALL/Bicep-Curl-Band1.png",
          "https://prod-images.theprehabguys.com/exercises/396/3967fafd-93da-58e6-a1da-f8264ed153dd/SMALL/Bicep-Curl-Band2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=gF0z_9Cl4OHs4PW_YZhptREdL0PGhsbsS0JMPb75ArY&expires=1789352098&token_path=%2Ff93e113d-0c7e-4880-b0fc-181be725e470%2F/f93e113d-0c7e-4880-b0fc-181be725e470/play_720p.mp4",
        "how": "In piedi su un elastico, gomiti aderenti ai fianchi. Fletti gli avambracci e poi controlla la discesa in fase eccentrica lenta (3 secondi di ritorno).",
        "feel": "Contrazione del bicipite brachiale e brachioradiale, controllo tendineo del gomito.",
        "comp": "Non dondolare con la schiena. Non staccare i gomiti dal busto."
      },
      {
        "name": "Single Arm Tall Plank - Swissball",
        "statType": "Reps",
        "statVal": "5+5",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/a1e/a1ebb175-0738-5868-bb01-42499887a179/SMALL/Single-Arm-Tall-Plank-Swissball1.png",
          "https://prod-images.theprehabguys.com/exercises/48b/48b21d71-9dca-5583-b91c-0304b50f24dc/SMALL/Single-Arm-Tall-Plank-Swissball2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=l5N0aTS7eq8ovg56Iad-A-IyyZrhLEHiG91oqNIhW08&expires=1789352099&token_path=%2F49ea9f3a-84fe-4e4b-b772-bd7d858b2ef7%2F/49ea9f3a-84fe-4e4b-b772-bd7d858b2ef7/play_720p.mp4",
        "how": "Posizione di plank alto con le mani in appoggio su una fitball. Stacca una mano portandola al petto per qualche secondo, mantenendo il corpo perfettamente bloccato.",
        "feel": "Stabilità estrema anti-rotazionale del core e propriocezione della spalla in appoggio.",
        "comp": "Non far ruotare o basculare il bacino. Allarga i piedi se necessario per aumentare la base d'appoggio."
      }
    ]
  },
  "prog_luna_cicola": {
    "id": "prog_luna_cicola",
    "title": "cicola 1",
    "athNum": 11,
    "athName": "Luna Cicola",
    "flags": "Deficit severo rotazione esterna anche, valgismo dinamico",
    "volume": "2x",
    "exercises": [
      {
        "name": "Quadriceps Foam Rolling",
        "statType": "Reps",
        "statVal": "90\"",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/b3b/b3b85e87-ac9a-54a0-b5ee-17a9668ed484/SMALL/Quadriceps-Foam-Rolling1.png",
          "https://prod-images.theprehabguys.com/exercises/a74/a743d304-7ca6-5b55-a9d6-46e66552d864/SMALL/Quadriceps-Foam-Rolling2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=tULHgqU-nco1wdqdeirypR1LClHNqnzL7PnxBTiIeuQ&expires=1789352088&token_path=%2F8257c085-e06c-4cdd-a8d1-580447839f27%2F/8257c085-e06c-4cdd-a8d1-580447839f27/play_720p.mp4",
        "how": "Sdraiata prona con il rullo posizionato sotto la parte anteriore della coscia. Esegui passaggi lenti dal bacino a sopra la rotula, ruotando leggermente la gamba per massaggiare anche i vasti.",
        "feel": "De-tensione miofasciale del retto femorale e quadricipite prima del lavoro di forza.",
        "comp": "Non rullare direttamente sopra la rotula."
      },
      {
        "name": "Psoas Soft Tissue Mobilization  - Lacrosse Ball",
        "statType": "Reps",
        "statVal": "90\"",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/9e4/9e46aede-0acb-5c1a-a6f4-e3d031ce6be7/SMALL/Psoas-soft-tissue-mobilization-lacrosse-ball-02.jpg",
          "https://prod-images.theprehabguys.com/exercises/dc6/dc6d045c-2c32-54a8-bd3d-3a4950bd5cb4/SMALL/Psoas-soft-tissue-mobilization-lacrosse-ball-01.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=HNSdSASQQtJ-16bKIBcXTof6yPoZfbZ8hl63e4wwPRk&expires=1789352089&token_path=%2F7292b175-31b0-4ef0-8c4b-49659aa0fda8%2F/7292b175-31b0-4ef0-8c4b-49659aa0fda8/play_720p.mp4",
        "how": "Sdraiata prona a terra, posiziona la pallina da lacrosse tra l'ombelico e la spina iliaca antero-superiore. Rilassa la muscolatura addominale e respira profondamente permettendo alla pallina di affondare.",
        "feel": "Rilascio profondo dell'ileopsoas e dei flessori dell'anca.",
        "comp": "Non effettuare spinte brusche. Se avverti un battito arterioso pulsante pronunciato, sposta leggermente la pallina."
      },
      {
        "name": "Eccentric Elbow Extension - Band",
        "statType": "Reps",
        "statVal": "6+6",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/0d1/0d14a81f-7963-5e7a-b599-f9eb8e8fa3e6/SMALL/Eccentric-Elbow-Extension-Band1.png",
          "https://prod-images.theprehabguys.com/exercises/87a/87a553b8-ab00-5a64-a2ea-808d92cc2a93/SMALL/Eccentric-Elbow-Extension-Band2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=JSpbgxQNPkUbykfKmnQrEifgcscvq3RC3eWlRVVD4Cs&expires=1789352099&token_path=%2F19aaefa8-a62d-49f2-bc07-6f8507e1f327%2F/19aaefa8-a62d-49f2-bc07-6f8507e1f327/play_720p.mp4",
        "how": "Elastico ancorato in alto. Estendi il gomito aiutandoti con l'altra mano, poi resisti alla flessione tornando molto lentamente (3-4 secondi di fase eccentrica) con un solo braccio.",
        "feel": "Rinforzo eccentrico del tricipite e protezione tendinea dell'olecrano.",
        "comp": "Non far risalire il braccio di scatto. Movimento fluido e costante."
      },
      {
        "name": "Eccentric Elbow Flexion - Band",
        "statType": "Reps",
        "statVal": "6+6",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/9d6/9d6db47f-1d1b-5144-9552-df1914e51272/SMALL/Eccentric-Elbow-Flexion-Band1.png",
          "https://prod-images.theprehabguys.com/exercises/c17/c178e889-9e85-5d2a-8aa9-5f9413c393b5/SMALL/Eccentric-Elbow-Flexion-Band2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=rLqm6yF4eVL6UC2Cs-7mx-R6yZQSTZ5tHkJp0RI_CPA&expires=1789352100&token_path=%2F6fe47e7a-61b5-4883-a22a-ffbf4a8a11b4%2F/6fe47e7a-61b5-4883-a22a-ffbf4a8a11b4/play_720p.mp4",
        "how": "Fletti il gomito con l'aiuto dell'altra mano, poi resisti all'estensione controllando la discesa in 3-4 secondi contro la trazione dell'elastico.",
        "feel": "Lavoro eccentrico del bicipite brachiale e tendine bicipitale.",
        "comp": "Non perdere la tensione a inizio allungamento."
      },
      {
        "name": "Eccentric Elbow Supination - Elbow Straight, Dumbbell, Band",
        "statType": "Reps",
        "statVal": "6+6",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/20c/20cd6ecd-8955-5ffb-b4e8-83ef8eac97fd/SMALL/Eccentric-Elbow-Supination-Elbow-Straight-Dumbbell-Band.jpg",
          "https://prod-images.theprehabguys.com/exercises/ea9/ea97f4c6-8dd8-5f2e-930b-c0823cb65e08/SMALL/Eccentric-Elbow-Supination-Elbow-Straight-Dumbbell-Band1.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=V7kbZ4woqRkA8rCJhjhzSFmMGzmfutYoS9dYydjJBBw&expires=1789352101&token_path=%2F7ada87c0-478f-40a4-9de1-7cafb7d33917%2F/7ada87c0-478f-40a4-9de1-7cafb7d33917/play_720p.mp4",
        "how": "Braccio disteso in avanti impugnando un manubrio da un'estremità. Lascia che il manubrio ruoti verso l'interno (pronazione) resistendo al movimento in eccentrica, poi riportalo su con l'altra mano.",
        "feel": "Rinforzo specifico dei muscoli supinatori e prevenzione epicondilite ed epitrocleite.",
        "comp": "Non flettere il polso o il gomito durante la decelerazione."
      }
    ]
  },
  "prog_erin_grippo": {
    "id": "prog_erin_grippo",
    "title": "grippo 1",
    "athNum": 12,
    "athName": "Erin Grippo",
    "flags": "Squat limitato a 90° per dorsiflessione caviglia, spalle anteposte",
    "volume": "3x",
    "exercises": [
      {
        "name": "Single Leg Calf Raise - Captain Morgan",
        "statType": "Reps",
        "statVal": "10+10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/e40/e40a6135-f34b-4d02-8270-bfad5df8374c/SMALL/single-leg-calf-raise-captain-morgan.webp",
          "https://prod-images.theprehabguys.com/exercises/e40/e40a6135-f34b-4d02-8270-bfad5df8374c/SMALL/single-leg-calf-raise-captain-morgan.webp"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=d-BYlsxfGL4ViwFdfWhITtyr8GwT5uvR5pOjJrb8QjE&expires=1789352102&token_path=%2F05cdbde5-b53e-4891-a08f-1039e62126c8%2F/05cdbde5-b53e-4891-a08f-1039e62126c8/play_720p.mp4",
        "how": "In piedi su una gamba vicino a una parete con una fitball tra il ginocchio opposto piegato e il muro. Spingi energicamente il ginocchio contro la palla e contemporaneamente sollevati sulla punta del piede della gamba a terra.",
        "feel": "Lavoro combinato di polpaccio (gastrocnemio/soleo) sulla gamba a terra e medio gluteo sulla gamba che preme la palla.",
        "comp": "Non far cadere la palla. Non piegare il ginocchio della gamba a terra durante la salita sul tallone."
      },
      {
        "name": "Side Plank - On Knees, Clam, Band",
        "statType": "Reps",
        "statVal": "8+8",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/1f9/1f955883-d566-554a-9791-84ded4ac0461/SMALL/Side-Plank-On-Knees-Clam-Band.jpg",
          "https://prod-images.theprehabguys.com/exercises/9dc/9dc12c33-36e4-565d-8d95-261bd3811e1d/SMALL/Side-Plank-On-Knees-Clam-Band1.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=myvzc_C_qvNZltNlHmfjInWEm04WYqsDU7MI-lxd_ZA&expires=1789352073&token_path=%2Fb9dd6d4d-034f-4857-b87e-07f80086580f%2F/b9dd6d4d-034f-4857-b87e-07f80086580f/play_720p.mp4",
        "how": "Posizionati sul fianco in appoggio su gomito e ginocchia piegate a 90°, con un elastico attorno alle ginocchia. Solleva il bacino allineando spalle, anche e ginocchia; contemporaneamente apri il ginocchio superiore mantenendo i talloni a contatto.",
        "feel": "Forte contrazione del medio gluteo della gamba superiore e lavoro isometrico di core e anca del lato a terra.",
        "comp": "Non far ruotare il bacino all'indietro durante l'apertura. Mantieni il bacino alto senza farlo cedere verso il pavimento."
      },
      {
        "name": "Bridge Hold",
        "statType": "Hold",
        "statVal": "30\"s",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/6e3/6e3dbbb6-d374-5a6e-8370-1a2796d379b3/SMALL/Bridge-Hold-1.png",
          "https://prod-images.theprehabguys.com/exercises/e11/e114644b-369f-5635-af71-b068e159a74d/SMALL/Bridge-Hold-2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=ybOSPk4Asc5EyFd5-4cc7ZkAZjQ8zwapimqhBXfGrnY&expires=1789352103&token_path=%2Fdca70478-1a96-4a0f-923a-e903f8ff2296%2F/dca70478-1a96-4a0f-923a-e903f8ff2296/play_720p.mp4",
        "how": "Sdraiata supina con ginocchia flesse e piedi a terra. Solleva il bacino contraendo glutei e addome fino ad allineare cosce e tronco, mantenendo la posizione isometrica.",
        "feel": "Isolamento del grande gluteo, femorali e stabilizzazione lombo-pelvica.",
        "comp": "Non inarcare la schiena spingendo con la zona lombare. Mantieni le costole abbassate."
      }
    ]
  },
  "prog_giulia_caserta": {
    "id": "prog_giulia_caserta",
    "title": "caserta 1",
    "athNum": 13,
    "athName": "Giulia Caserta",
    "flags": "Butt wink >110°, spalla SX anteposta",
    "volume": "3x",
    "exercises": [
      {
        "name": "Step Up and Down",
        "statType": "Reps",
        "statVal": "8+8",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/832/832452f4-556a-5480-9d16-345b7632733b/SMALL/Sumo-Deadlift-Dumbbell1.png",
          "https://prod-images.theprehabguys.com/exercises/e43/e4368e7c-385f-5e21-92db-01b43fa11bb2/SMALL/Sumo-Deadlift-Dumbbell2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=uLdxRI1FeEk1Um52cEy-ZFBvnW9vW064mslvGqbZ-Nw&expires=1789352104&token_path=%2F5b116330-f36d-453c-9565-6b557b4f56f3%2F/5b116330-f36d-453c-9565-6b557b4f56f3/play_720p.mp4",
        "how": "In appoggio monopodalico su un box o gradino (20-30 cm). Spingi attraverso il tallone della gamba sul rialzo estendendo anca e ginocchio senza darti slancio con la gamba a terra. Ritorna in discesa eccentrica controllata (2-3s) sfiorando il pavimento con la punta del piede opposto.",
        "feel": "Attivazione mirata del quadricipite, medio gluteo e stabilità lombo-pelvica della gamba in appoggio.",
        "comp": "Non spingere con la gamba a terra per salire. Mantieni il ginocchio allineato al 2° dito del piede evitando il collasso in valgo e mantieni il bacino livellato."
      },
      {
        "name": "Carry - 90/90, Bottoms Up, Unilateral",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/ffe/ffeb73c5-0924-517f-b3ab-35027a53cb2f/SMALL/Carry-9090-Bottoms-Up-Unilateral-1..png",
          "https://prod-images.theprehabguys.com/exercises/ee3/ee39c026-7d82-5931-ae54-cca009934ca3/SMALL/Carry-9090-Bottoms-Up-Unilateral-2..png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=klDqz5Mjbwxpz_emNUawkeiMnckrXwP8DT8N0OB0XKI&expires=1789352104&token_path=%2Fec91c1db-ef97-4ef7-94f9-282f9df941b9%2F/ec91c1db-ef97-4ef7-94f9-282f9df941b9/play_720p.mp4",
        "how": "In piedi, impugna un kettlebell capovolto (fondo verso l'alto) con gomito e spalla piegati a 90°. Cammina a passi lenti e controllati mantenendo il peso perfettamente stabile.",
        "feel": "Propriocezione e stabilità della cuffia dei rotatori, forza della presa dell'avambraccio e core anti-flessione.",
        "comp": "Non inclinare il busto di lato. Non permettere al kettlebell di oscillare."
      },
      {
        "name": "Single Leg Calf Raise - Captain Morgan",
        "statType": "Reps",
        "statVal": "8+8",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/e40/e40a6135-f34b-4d02-8270-bfad5df8374c/SMALL/single-leg-calf-raise-captain-morgan.webp",
          "https://prod-images.theprehabguys.com/exercises/e40/e40a6135-f34b-4d02-8270-bfad5df8374c/SMALL/single-leg-calf-raise-captain-morgan.webp"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=d-BYlsxfGL4ViwFdfWhITtyr8GwT5uvR5pOjJrb8QjE&expires=1789352102&token_path=%2F05cdbde5-b53e-4891-a08f-1039e62126c8%2F/05cdbde5-b53e-4891-a08f-1039e62126c8/play_720p.mp4",
        "how": "In piedi su una gamba vicino a una parete con una fitball tra il ginocchio opposto piegato e il muro. Spingi energicamente il ginocchio contro la palla e contemporaneamente sollevati sulla punta del piede della gamba a terra.",
        "feel": "Lavoro combinato di polpaccio (gastrocnemio/soleo) sulla gamba a terra e medio gluteo sulla gamba che preme la palla.",
        "comp": "Non far cadere la palla. Non piegare il ginocchio della gamba a terra durante la salita sul tallone."
      }
    ]
  },
  "prog_nelly_adamczewska": {
    "id": "prog_nelly_adamczewska",
    "title": "Adamczewska 1",
    "athNum": 14,
    "athName": "Nelly Adamczewska",
    "flags": "Lassità legamentosa, discinesia scapolare DX, valgismo SX",
    "volume": "2x",
    "exercises": [
      {
        "name": "Pec Minor Soft Tissue Mobilization",
        "statType": "Reps",
        "statVal": "90\"",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/8c3/8c3d2918-fdec-563d-81d4-441fb0df9e24/SMALL/Pec-Minor-Soft-Tissue-Mobilization.jpg",
          "https://prod-images.theprehabguys.com/exercises/511/51109131-208b-5f82-a5c4-ac4d28b77990/SMALL/Pec-Minor-Soft-Tissue-Mobilization1.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=sDXtLViqWr_ndeCekrIUTxUL53et_k9WVHaaiEkTEAI&expires=1789352105&token_path=%2Fb614bcd2-3784-4bb4-ad18-71d59bb93807%2F/b614bcd2-3784-4bb4-ad18-71d59bb93807/play_720p.mp4",
        "how": "Posiziona una pallina da lacrosse sotto la clavicola, nella parte alta del petto verso la spalla (piccolo pettorale). Esegui pressioni circolari rilassando il braccio.",
        "feel": "Decontrazione del piccolo pettorale per correggere l'anteposizione delle spalle e liberare il movimento scapolare.",
        "comp": "Non premere direttamente sulle ossa o sulle articolazioni."
      },
      {
        "name": "Pec and Bicep Stretch",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/b8f/b8fa036b-d968-527b-b99d-30a2125d4e5b/SMALL/Pec-and-Bicep-Stretch1.png",
          "https://prod-images.theprehabguys.com/exercises/3dc/3dc9db89-1dd9-5bf6-9dda-c2d94f6a0016/SMALL/Pec-and-Bicep-Stretch2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=moGErip2WU4YFGzwAI015vIKqg0fbSStQ-12WpUJREg&expires=1789352106&token_path=%2F3bfdb17f-1f00-4d6f-84da-371e670b9475%2F/3bfdb17f-1f00-4d6f-84da-371e670b9475/play_720p.mp4",
        "how": "In piedi accanto a una parete o stipite. Appoggia mano e avambraccio a braccio disteso e ruota delicatamente il tronco dalla parte opposta.",
        "feel": "Distensione e apertura del pettorale e del capo lungo del bicipite.",
        "comp": "Non inarcare la colonna lombare per aumentare l'allungamento."
      },
      {
        "name": "Thoracic Spine Extension Mobilization - Foam Roller",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/0ea/0eaef18b-49c8-5002-b0f8-c8fa16e20b7b/SMALL/Thoracic-Spine-Extension-Mobilization-01.jpg",
          "https://prod-images.theprehabguys.com/exercises/68a/68a14089-b834-5c50-905e-ed3c59a9631c/SMALL/Thoracic-Spine-Extension-Mobilization-02.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=ABaa_ZshKdgCFOsATXdKBd7gBM0_6OeYPKbqBCk5PhI&expires=1789352107&token_path=%2Fe0f57cd5-9de2-4b92-b1fe-09dc871aa248%2F/e0f57cd5-9de2-4b92-b1fe-09dc871aa248/play_720p.mp4",
        "how": "Supina con il foam roller sotto la parte centrale della schiena (tratto dorsale). Mani dietro la nuca a sostegno del collo, estendi delicatamente la colonna sopra il rullo durante l'espirazione.",
        "feel": "Apertura della gabbia toracica e incremento dell'estensione toracica per la postura a muro e in attacco.",
        "comp": "Non posizionare mai il foam roller sotto il tratto lombare (bassa schiena)."
      },
      {
        "name": "Open Book",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/63c/63c2b063-0c4a-5c90-88cc-3e4f721dc1d5/SMALL/Open-Book.jpg",
          "https://prod-images.theprehabguys.com/exercises/33f/33fd84d1-0521-5a49-899b-360b380c6ec6/SMALL/Open-Book-1.jpg"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=pkBfOrSqsrH78vVIKGnaOX1hxN9qCo0790t88lxm9L0&expires=1789352108&token_path=%2Fe5a991fc-e195-4528-99a8-dedccb48e734%2F/e5a991fc-e195-4528-99a8-dedccb48e734/play_720p.mp4",
        "how": "Sul fianco con ginocchia e anche piegate a 90° una sopra l'altra. Braccia tese avanti, apri il braccio superiore descrivendo un arco fino al pavimento dietro di te ruotando il torace.",
        "feel": "Mobilità rotazionale della colonna dorsale e allungamento della catena cinetica anteriore del torace.",
        "comp": "Non far scivolare indietro il bacino o staccare le ginocchia l'una dall'altra."
      },
      {
        "name": "Single Leg Short Foot",
        "statType": "Reps",
        "statVal": "10",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/04b/04b31f72-79ec-56b9-b28a-e4d0645514f4/SMALL/Single-Leg-Short-Foot.png",
          "https://prod-images.theprehabguys.com/exercises/9dd/9ddd28a7-58c5-5a93-a1f7-32973a7fce24/SMALL/Single-Leg-Short-Foot.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=8YlzFuDzjs0QTkWMewLTKYvSSYQszTXzJrifcnUhEns&expires=1789352091&token_path=%2F6d91f0cc-863f-44f6-ace3-687e6897a1bd%2F/6d91f0cc-863f-44f6-ace3-687e6897a1bd/play_720p.mp4",
        "how": "In appoggio monopodalico a piedi nudi. 'Accorcia' il piede avvicinando la base del primo metatarso al tallone, sollevando attivamente la volta plantare senza arricciare le dita.",
        "feel": "Contrazione dei muscoli intrinseci del piede e attivazione del tibiale posteriore.",
        "comp": "Non flettere le dita ad artiglio: devono rimanere distese e rilassate a contatto col suolo."
      },
      {
        "name": "Isometric Sidelying Clam - Band",
        "statType": "Hold",
        "statVal": "30\"s",
        "notes": "",
        "images": [
          "https://prod-images.theprehabguys.com/exercises/d4b/d4b4743a-aba4-5ca3-809e-59640f1b32e1/SMALL/Isometric-Side-Lying-Clam-Band-1.png",
          "https://prod-images.theprehabguys.com/exercises/634/6341f059-b6c9-516c-a740-673c428f1666/SMALL/Isometric-Side-Lying-Clam-Band-2.png"
        ],
        "mp4": "https://videos.theprehabguys.com/bcdn_token=NwUU7Cl_0gBNXShZfLxyBosxBEeu4MoyXctKmN_n50w&expires=1789352109&token_path=%2F5edafe03-77d5-4161-8943-799bfaf410a4%2F/5edafe03-77d5-4161-8943-799bfaf410a4/play_720p.mp4",
        "how": "Sdraiata sul fianco con ginocchia piegate a 90° ed elastico sopra le ginocchia. Apri il ginocchio superiore mantenendo i talloni uniti e tieni la posizione di massima apertura isometrica.",
        "feel": "Forte contrazione e bruciore del medio gluteo e dei rotatori profondi dell'anca.",
        "comp": "Non ruotare il bacino all'indietro per cercare un'apertura maggiore."
      }
    ]
  }
};

const PREHAB_ATHLETE_MAP = {
  "1": {
    "athNum": 1,
    "athName": "Veronica Allasia",
    "code": "KSCPPDAB",
    "programId": "prog_veronica_allasia"
  },
  "2": {
    "athNum": 2,
    "athName": "Maria Marcuzzi",
    "code": "IB56ARLW",
    "programId": "prog_maria_marcuzzi"
  },
  "3": {
    "athNum": 3,
    "athName": "Victoria Sassolini",
    "code": "7QBW7ZEY",
    "programId": "prog_victoria_sassolini"
  },
  "4": {
    "athNum": 4,
    "athName": "Anja Asonja",
    "code": "NWSHWMVO",
    "programId": "prog_anja_asonja"
  },
  "5": {
    "athNum": 5,
    "athName": "Chiara Lo Dico",
    "code": "VDS44TD5",
    "programId": "prog_chiara_lo_dico"
  },
  "6": {
    "athNum": 6,
    "athName": "Gaia Biondi",
    "code": "C4RKEAQL",
    "programId": "prog_gaia_biondi"
  },
  "7": {
    "athNum": 7,
    "athName": "Elisa Bole",
    "code": "UG7YPMPE",
    "programId": "prog_elisa_bole"
  },
  "8": {
    "athNum": 8,
    "athName": "Federica Nonnati",
    "code": "IIPRMI4A",
    "programId": "prog_federica_nonnati"
  },
  "9": {
    "athNum": 9,
    "athName": "Sara Dodi",
    "code": "TTGRYSZD",
    "programId": "prog_sara_dodi"
  },
  "11": {
    "athNum": 11,
    "athName": "Luna Cicola",
    "code": "CAGFYEG4",
    "programId": "prog_luna_cicola"
  },
  "12": {
    "athNum": 12,
    "athName": "Erin Grippo",
    "code": "CBQEN45V",
    "programId": "prog_erin_grippo"
  },
  "13": {
    "athNum": 13,
    "athName": "Giulia Caserta",
    "code": "WJBUL7HQ",
    "programId": "prog_giulia_caserta"
  },
  "14": {
    "athNum": 14,
    "athName": "Nelly Adamczewska",
    "code": "SCRW653I",
    "programId": "prog_nelly_adamczewska"
  }
};

const PREHAB_CODE_MAP = {
  "KSCPPDAB": "prog_veronica_allasia",
  "IB56ARLW": "prog_maria_marcuzzi",
  "7QBW7ZEY": "prog_victoria_sassolini",
  "NWSHWMVO": "prog_anja_asonja",
  "VDS44TD5": "prog_chiara_lo_dico",
  "C4RKEAQL": "prog_gaia_biondi",
  "UG7YPMPE": "prog_elisa_bole",
  "IIPRMI4A": "prog_federica_nonnati",
  "TTGRYSZD": "prog_sara_dodi",
  "CAGFYEG4": "prog_luna_cicola",
  "CBQEN45V": "prog_erin_grippo",
  "WJBUL7HQ": "prog_giulia_caserta",
  "SCRW653I": "prog_nelly_adamczewska"
};

const PREHAB_LIBRARY = {
  "Single Leg Balance - Foam Pad": {
    "name": "Single Leg Balance - Foam Pad",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/e35/e350ede3-f2ae-5f48-9a37-b0c3900b1567/SMALL/Single-Leg-Balance-Foam-Pad1.png",
      "https://prod-images.theprehabguys.com/exercises/39e/39eb28c9-329c-5e86-bda2-db546f2d20f5/SMALL/Single-Leg-Balance-Foam-Pad2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=Y_afiShsG97q6RBbAhycE70SjtLTfA207E1GA3OfdbQ&expires=1789352072&token_path=%2F088f2d40-4852-48e4-805f-5e3e582914e9%2F/088f2d40-4852-48e4-805f-5e3e582914e9/play_720p.mp4",
    "how": "Posizionati in appoggio monopodalico su un cuscino propriocettivo (foam pad). Mantieni ginocchio e anca leggermente flessi, bacino livellato e braccia rilassate o lungo i fianchi. Fissa un punto avanti per favorire l'equilibrio.",
    "feel": "Attivazione intensa dei muscoli intrinseci del piede, stabilizzatori della caviglia (tibiale posteriore e peronieri) e medio gluteo.",
    "comp": "Non iperestendere il ginocchio (non bloccarlo indietro). Non inclinare il busto lateralmente per compensare le oscillazioni."
  },
  "Side Plank - On Knees, Clam, Band": {
    "name": "Side Plank - On Knees, Clam, Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/1f9/1f955883-d566-554a-9791-84ded4ac0461/SMALL/Side-Plank-On-Knees-Clam-Band.jpg",
      "https://prod-images.theprehabguys.com/exercises/9dc/9dc12c33-36e4-565d-8d95-261bd3811e1d/SMALL/Side-Plank-On-Knees-Clam-Band1.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=myvzc_C_qvNZltNlHmfjInWEm04WYqsDU7MI-lxd_ZA&expires=1789352073&token_path=%2Fb9dd6d4d-034f-4857-b87e-07f80086580f%2F/b9dd6d4d-034f-4857-b87e-07f80086580f/play_720p.mp4",
    "how": "Posizionati sul fianco in appoggio su gomito e ginocchia piegate a 90°, con un elastico attorno alle ginocchia. Solleva il bacino allineando spalle, anche e ginocchia; contemporaneamente apri il ginocchio superiore mantenendo i talloni a contatto.",
    "feel": "Forte contrazione del medio gluteo della gamba superiore e lavoro isometrico di core e anca del lato a terra.",
    "comp": "Non far ruotare il bacino all'indietro durante l'apertura. Mantieni il bacino alto senza farlo cedere verso il pavimento."
  },
  "Split Stance Lunge - RNT": {
    "name": "Split Stance Lunge - RNT",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/29e/29efcac3-d29b-5ce2-a964-f2fcd1dca372/SMALL/Split-Stance-Lunge-RNT1.png",
      "https://prod-images.theprehabguys.com/exercises/d83/d8349582-0ad0-5f34-9fdb-801417754b69/SMALL/Split-Stance-Lunge-RNT2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=JzVBbB3bxuD0wm1qkrQytbqIaow6B-muoSZCRGKhZPE&expires=1789352074&token_path=%2Fcae1d904-27ab-4d92-912d-5f57780186af%2F/cae1d904-27ab-4d92-912d-5f57780186af/play_720p.mp4",
    "how": "Posizionati in split stance (affondo statico) con un elastico che traziona il ginocchio anteriore verso l'interno (valgo). Scendi in affondo verticale opponendoti attivamente alla resistenza dell'elastico per mantenere il ginocchio perfettamente allineato al 2° dito del piede.",
    "feel": "Attivazione mirata del medio gluteo per contrastare il valgismo dinamico, assieme a quadricipiti e grande gluteo.",
    "comp": "Non cedere alla trazione dell'elastico (evita il collasso mediale del ginocchio). Mantieni il busto eretto senza oscillare."
  },
  "Shoulder Prep - Band": {
    "name": "Shoulder Prep - Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/ccd/ccd95c22-4eba-57f0-acaf-e26d6dfea40c/SMALL/Shoulder-Prep-Band.jpg",
      "https://prod-images.theprehabguys.com/exercises/21e/21e8e052-4cc8-51eb-b22e-d0ef80078852/SMALL/Shoulder-Prep-Band1.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=T8mWJNqZnWXnRSFdV_nEe3NPK4BtVAdZncg2Ugde3Nk&expires=1789352075&token_path=%2F3fcb1174-bc44-4608-a6de-2f3556219b9f%2F/3fcb1174-bc44-4608-a6de-2f3556219b9f/play_720p.mp4",
    "how": "Con un elastico tra le mani, esegui movimenti combinati di extrarotazione delle spalle, retrazione scapolare a gomiti flessi e dislocazioni controllate a braccia tese.",
    "feel": "Calore e attivazione profonda della cuffia dei rotatori (sottospinato e piccolo rotondo) e stabilizzatori scapolari (trapezio inferiore e romboidi).",
    "comp": "Non inarcare la schiena (colonna lombare neutra). Non sollevare le spalle verso le orecchie."
  },
  "Single Leg Hip Thrust": {
    "name": "Single Leg Hip Thrust",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/99d/99df7b8c-1b4d-5cb0-81a2-185fd13f7fa7/SMALL/Single-Leg-Hip-Thrust1.png",
      "https://prod-images.theprehabguys.com/exercises/ebf/ebffd6e0-253e-5d5e-97ac-64f8048673b6/SMALL/Single-Leg-Hip-Thrust2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=aVevmYKkG3_BzM3DfqCVFs5Qj97vU12-vuQbT50DV7k&expires=1789352075&token_path=%2F4523a0b6-f7d4-4425-8948-5966397088b5%2F/4523a0b6-f7d4-4425-8948-5966397088b5/play_720p.mp4",
    "how": "Spalle in appoggio su una panca o box, un piede a terra a 90° e l'altra gamba raccolta a 90° in aria. Spingi attraverso il tallone a terra estendendo completamente l'anca fino ad allineare coscia, bacino e busto.",
    "feel": "Massima contrazione del grande gluteo e della catena posteriore della gamba in appoggio.",
    "comp": "Non inarcare la zona lombare a fine corsa: l'estensione deve avvenire dall'anca mantenendo l'addome attivo."
  },
  "Split Stance Pallof - Press": {
    "name": "Split Stance Pallof - Press",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/04f/04f08d46-0bd7-4c46-a672-5f1cdc601ef6/SMALL/split-stance-pallof-press.gif",
      "https://prod-images.theprehabguys.com/exercises/04f/04f08d46-0bd7-4c46-a672-5f1cdc601ef6/SMALL/split-stance-pallof-press.gif"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=l215pfNd2WGJ1CmPlo2-MDBRUeY5pboPAA4fnE8CCK4&expires=1789352076&token_path=%2F560b739f-50d8-4ec4-9734-4c1903d316bc%2F/560b739f-50d8-4ec4-9734-4c1903d316bc/play_720p.mp4",
    "how": "In posizione di mezzo affondo (split stance), perpendicolare a un cavo o elastico ancorato lateralmente. Porta le mani al centro del petto ed estendi le braccia in avanti resistendo alla forza di rotazione.",
    "feel": "Forte attivazione anti-rotazionale del core (obliqui, trasverso dell'addome) e stabilità pelvica.",
    "comp": "Non farti ruotare le spalle o il bacino verso l'ancoraggio. Spalle basse e lontane dalle orecchie."
  },
  "Single Leg Bridge - Leg Bent": {
    "name": "Single Leg Bridge - Leg Bent",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/c2e/c2e178e5-3232-581d-b03b-b8e5d5f2ce4f/SMALL/Single-Leg-Bridge-Leg-Bent.jpg",
      "https://prod-images.theprehabguys.com/exercises/a72/a7250f3a-92fd-563c-bce6-6cd58c7a1f26/SMALL/Single-Leg-Bridge-Leg-Bent1.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=lYINuZLMOTqQdf-JWqnMFfvZHYpp9n1c1ZzwXsVS56A&expires=1789352077&token_path=%2F0127c33c-f440-44d0-9bbe-d0226eef4a80%2F/0127c33c-f440-44d0-9bbe-d0226eef4a80/play_720p.mp4",
    "how": "Sdraiata supina con un ginocchio flesso e piede a terra, l'altra gamba raccolta al petto. Spingi dal tallone sollevando il bacino da terra fino a completare l'estensione dell'anca.",
    "feel": "Isolamento del grande gluteo e bicipite femorale, controllo stabilità del bacino.",
    "comp": "Non spingere con la punta del piede. Non iperestendere la zona lombare a fine movimento."
  },
  "Side Plank - On Knees, Hip Abduction": {
    "name": "Side Plank - On Knees, Hip Abduction",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/708/7083d7a9-ab5e-5e78-8776-547721e755c3/SMALL/Side-Plank-On-Knees-Hip-Abduction1.png",
      "https://prod-images.theprehabguys.com/exercises/e9c/e9cca273-3e8d-5e87-99c0-f52df34ad257/SMALL/Side-Plank-On-Knees-Hip-Abduction2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=drS1qEUGvFFPqy28_u6nkOZLZypMR_VNUk-c4lsdIBw&expires=1789352078&token_path=%2Fccb43a4b-89d3-4747-9960-2478db1b44c6%2F/ccb43a4b-89d3-4747-9960-2478db1b44c6/play_720p.mp4",
    "how": "In side plank su gomito e ginocchio a terra. Solleva il bacino e contemporaneamente solleva la gamba superiore tesa verso l'alto mantenendo il piede a martello.",
    "feel": "Medio gluteo bilaterale (stabilizzatore a terra e dinamico in alto) e muscoli obliqui del tronco.",
    "comp": "Non ruotare il bacino avanti o indietro. Non flettere la gamba in avanti durante il sollevamento."
  },
  "Thoracic Spine Mobilization - Overhead Reach": {
    "name": "Thoracic Spine Mobilization - Overhead Reach",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/6c3/6c387e9d-ef58-5263-bbff-51b91f0a9fa1/SMALL/Thoracic-Spine-Mobilization-Overhead-Reach.jpg",
      "https://prod-images.theprehabguys.com/exercises/fc6/fc699ecb-3c51-57d0-990e-35ab901d39e6/SMALL/Thoracic-Spine-Mobilization-Overhead-Reach1.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=p48SvLWjfUJVwBP0mCYj1jY0XJDz1bClvUbmSHC9f_w&expires=1789352079&token_path=%2F377d2de7-0f39-4e18-995d-549cda42fa02%2F/377d2de7-0f39-4e18-995d-549cda42fa02/play_720p.mp4",
    "how": "Seduta sui talloni con braccia distese in avanti su un rialzo o fitball. Mantieni il bacino fisso e lascia scendere delicatamente il petto verso il pavimento estendendo il tratto dorsale.",
    "feel": "Allungamento del gran dorsale e mobilità in estensione della colonna toracica e cingolo scapolare.",
    "comp": "Non inarcare la colonna lombare: il movimento deve avvenire nella parte alta e media della schiena."
  },
  "Thoracic Spine Mobilization - Swissball": {
    "name": "Thoracic Spine Mobilization - Swissball",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/00d/00d8592b-9880-55d6-afb7-d23c31c1ea24/SMALL/Thoracic-Spine-Mobilization-Swissball-1.png",
      "https://prod-images.theprehabguys.com/exercises/22a/22a8bc3c-87eb-5aa5-ac6a-b3d890d387a1/SMALL/Thoracic-Spine-Mobilization-Swissball-2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=mCG6Po-bEQ1YvFp6oW14xdyeFyF12EYuJFAu9Ljzbq4&expires=1789352080&token_path=%2Fd6d87119-b8f5-43ec-80d5-94441e038e49%2F/d6d87119-b8f5-43ec-80d5-94441e038e49/play_720p.mp4",
    "how": "In ginocchio davanti alla fitball, appoggia gli avambracci sopra la palla. Spingi la palla in avanti espirando e abbassando il torace verso terra, poi ritorna inspirando.",
    "feel": "Apertura della cassa toracica, de-tensione interscapolare e mobilità di spalle e dorso.",
    "comp": "Non forzare l'escursione in caso di fitte alle spalle. Mantieni il movimento fluido e controllato."
  },
  "Quadruped Thread The Needle To Open Book": {
    "name": "Quadruped Thread The Needle To Open Book",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/856/8567ed39-ce99-44e0-8c4d-854954f3bb9e/SMALL/quadruped-thread-the-needle-to-open-book.gif",
      "https://prod-images.theprehabguys.com/exercises/856/8567ed39-ce99-44e0-8c4d-854954f3bb9e/SMALL/quadruped-thread-the-needle-to-open-book.gif"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=JTgvfOeOJ_ZO17dCmhLoSYNlwB3C0Q4dTVYUs16XqPE&expires=1789352081&token_path=%2Fd022a22b-a1ae-4046-8d88-c8fada2cbe63%2F/d022a22b-a1ae-4046-8d88-c8fada2cbe63/play_720p.mp4",
    "how": "In quadrupedia a terra, infila un braccio sotto il busto ruotando il torace verso terra, poi apri lo stesso braccio verso l'alto ruotando il torace verso il soffitto e seguendo la mano con gli occhi.",
    "feel": "Mobilità rotazionale della colonna dorsale e distensione della muscolatura periscapolare e pettorale.",
    "comp": "Non traslare lateralmente il bacino: le anche devono rimanere bloccate e centrate rispetto alle ginocchia."
  },
  "Arm Bar - Half Rotation, Kettlebell": {
    "name": "Arm Bar - Half Rotation, Kettlebell",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/44a/44a8a2e7-eabe-595b-a78b-4b700fc7f2df/SMALL/Arm-Bar-Half-Rotation-Kettlebell1.png",
      "https://prod-images.theprehabguys.com/exercises/0d5/0d5cff03-e19d-5226-9320-96325a45e45b/SMALL/Arm-Bar-Half-Rotation-Kettlebell2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=cB5m2ZefWTZPgGLEeQHy3Cf1vf_UKa91jJjNTZFd7wU&expires=1789352082&token_path=%2F202587ba-d347-4a51-b6ad-2c5a800650ee%2F/202587ba-d347-4a51-b6ad-2c5a800650ee/play_720p.mp4",
    "how": "Supina a terra con kettlebell tenuta a braccio teso verso il soffitto. Ruota lentamente su un fianco mantenendo il kettlebell perfettamente perpendicolare e lo sguardo fisso sul peso.",
    "feel": "Stabilità profonda e propriocettiva della cuffia dei rotatori e del dentato anteriore.",
    "comp": "Non piegare il gomito: il braccio deve rimanere dritto e solido come una colonna portante."
  },
  "Calf Foam Rolling": {
    "name": "Calf Foam Rolling",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/980/980237d2-693f-5f91-9d11-e9a77c94eef0/SMALL/Calf-Foam-Rolling1-1.png",
      "https://prod-images.theprehabguys.com/exercises/305/30525707-04fe-579e-ac2c-9bb68da56a03/SMALL/Calf-Foam-Rolling2-1.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=4QXUlX1deFDN9MCj9QcHtqQiJrrf-MDcTbHHHJN-v5Y&expires=1789352083&token_path=%2Ff52435da-ff73-480a-8d2f-a44c4bbe2d2f%2F/f52435da-ff73-480a-8d2f-a44c4bbe2d2f/play_720p.mp4",
    "how": "Seduta a terra con il foam roller posizionato sotto il polpaccio. Solleva il bacino e rotola lentamente dalla caviglia a poco sotto il ginocchio, fermandoti sui punti contratti.",
    "feel": "Rilascio miofasciale e riduzione della tensione sul tricipite surale e tendine d'Achille.",
    "comp": "Non passare direttamente dietro l'articolazione del ginocchio (cavo popliteo)."
  },
  "Foot Plantar Surface Self Massage - Lacrosse Ball": {
    "name": "Foot Plantar Surface Self Massage - Lacrosse Ball",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/11c/11cb0605-0bca-5def-98f1-d6e540e7a458/SMALL/Foot-Plantar-Surface-Self-Massage-Lacrosse-Ball1.png",
      "https://prod-images.theprehabguys.com/exercises/8cf/8cfabff6-fe5a-5c60-8f4f-906f88314023/SMALL/Foot-Plantar-Surface-Self-Massage-Lacrosse-Ball2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=nThLt5WOgSdr3IcPrItXBDbKF6L7gT-hl4j-ixLqo9c&expires=1789352084&token_path=%2Fe9b0aa7f-dbf1-4f7e-8037-1be17f587d39%2F/e9b0aa7f-dbf1-4f7e-8037-1be17f587d39/play_720p.mp4",
    "how": "In piedi o seduta, posiziona una pallina da lacrosse sotto la pianta del piede. Esegui pressioni circolari e longitudinali dal tallone all'avampiede applicando un carico tollerabile.",
    "feel": "Rilassamento e distensione della fascia plantare e dei muscoli flessori brevi delle dita.",
    "comp": "Non premere con forza eccessiva tale da provocare dolore acuto o contrazione di difesa."
  },
  "90/90 Hip Lift Off - Internal Rotation, External Rotation": {
    "name": "90/90 Hip Lift Off - Internal Rotation, External Rotation",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/d61/d6178dc5-926b-56d6-a3bb-b5bf30589815/SMALL/9090-Hip-Lift-Off-1.png",
      "https://prod-images.theprehabguys.com/exercises/7c7/7c7a8104-2cae-55c1-802a-44dd8e13ed50/SMALL/9090-Hip-Lift-Off2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=9Az9YfkezGWVtEEYHqkkX_cgIWG1aY9UD0xQPU7xZYY&expires=1789352085&token_path=%2Fd3ebb8c7-c830-45d0-8cd4-76b1cd537bdd%2F/d3ebb8c7-c830-45d0-8cd4-76b1cd537bdd/play_720p.mp4",
    "how": "Seduta a terra con gambe in posizione 90/90 (un'anca in rotazione esterna a 90°, l'altra in rotazione interna a 90°). Mantenendo il tronco saldo ed eretto, solleva attivamente il piede o il ginocchio della gamba posteriore (lift off) senza inclinare la schiena.",
    "feel": "Attivazione dei rotatori interni ed esterni dell'anca a fine corsa articolare (capsula dell'anca).",
    "comp": "Non inclinare il busto per aiutarti nel sollevamento: isola l'articolazione coxo-femorale."
  },
  "Ankle Dorsiflexion Mobilization - Dynamic, Box": {
    "name": "Ankle Dorsiflexion Mobilization - Dynamic, Box",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/fb4/fb4b9a24-6489-5274-85cd-92528837b3c7/SMALL/Ankle-Dorsiflexion-Mobilization-Dynamic-Box1-2.jpg",
      "https://prod-images.theprehabguys.com/exercises/92f/92f81478-fe9a-5fbc-8210-34acaf1cfda6/SMALL/Ankle-Dorsiflexion-Mobilization-Dynamic-Box1.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=ErJ72bvLkaOtymEX_P0XbTKEzzBwaULDqw6AsZNIOtg&expires=1789352086&token_path=%2F09f5fd72-c573-46f8-96da-4f690f7105b9%2F/09f5fd72-c573-46f8-96da-4f690f7105b9/play_720p.mp4",
    "how": "Piede appoggiato su un box o panca, l'altra gamba a terra. Porta il ginocchio in avanti oltre la linea delle dita mantenendo il tallone rigorosamente attaccato al piano d'appoggio.",
    "feel": "Allungamento del soleo e incremento dell'escursione articolare in dorsiflessione tibio-tarsica.",
    "comp": "Non permettere al tallone di staccarsi dal box. Evita che il ginocchio collassi verso l'interno."
  },
  "Bent Over Single Arm Lat Pull Down - Band": {
    "name": "Bent Over Single Arm Lat Pull Down - Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/9c3/9c31f147-1735-44b6-ae41-068c3b09d0b6/SMALL/Bent-Over-Single-Arm-Lat-Pull-Down-Band1.png",
      "https://prod-images.theprehabguys.com/exercises/c64/c643c3c8-4630-4816-9975-2fd282c29359/SMALL/Bent-Over-Single-Arm-Lat-Pull-Down-Band2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=fimTciDnTel0glWd-OXRZPy-WsHzhv4azKQpfHAZqm8&expires=1789352087&token_path=%2Fb5ce7325-b23c-40a2-9f0b-b6d0f2819d39%2F/b5ce7325-b23c-40a2-9f0b-b6d0f2819d39/play_720p.mp4",
    "how": "Busto flesso a 45°, un braccio afferra un elastico ancorato in alto. Tira il gomito verso l'anca deprimendo la scapola e stringendo il gran dorsale a fine corsa.",
    "feel": "Attivazione selettiva del gran dorsale e dei muscoli depressori e adduttori della scapola.",
    "comp": "Non ruotare il tronco verso il lato che tira. Non tirare tirando il polso, guida il movimento con il gomito."
  },
  "Quadriceps Foam Rolling": {
    "name": "Quadriceps Foam Rolling",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/b3b/b3b85e87-ac9a-54a0-b5ee-17a9668ed484/SMALL/Quadriceps-Foam-Rolling1.png",
      "https://prod-images.theprehabguys.com/exercises/a74/a743d304-7ca6-5b55-a9d6-46e66552d864/SMALL/Quadriceps-Foam-Rolling2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=tULHgqU-nco1wdqdeirypR1LClHNqnzL7PnxBTiIeuQ&expires=1789352088&token_path=%2F8257c085-e06c-4cdd-a8d1-580447839f27%2F/8257c085-e06c-4cdd-a8d1-580447839f27/play_720p.mp4",
    "how": "Sdraiata prona con il rullo posizionato sotto la parte anteriore della coscia. Esegui passaggi lenti dal bacino a sopra la rotula, ruotando leggermente la gamba per massaggiare anche i vasti.",
    "feel": "De-tensione miofasciale del retto femorale e quadricipite prima del lavoro di forza.",
    "comp": "Non rullare direttamente sopra la rotula."
  },
  "Psoas Soft Tissue Mobilization  - Lacrosse Ball": {
    "name": "Psoas Soft Tissue Mobilization  - Lacrosse Ball",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/9e4/9e46aede-0acb-5c1a-a6f4-e3d031ce6be7/SMALL/Psoas-soft-tissue-mobilization-lacrosse-ball-02.jpg",
      "https://prod-images.theprehabguys.com/exercises/dc6/dc6d045c-2c32-54a8-bd3d-3a4950bd5cb4/SMALL/Psoas-soft-tissue-mobilization-lacrosse-ball-01.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=HNSdSASQQtJ-16bKIBcXTof6yPoZfbZ8hl63e4wwPRk&expires=1789352089&token_path=%2F7292b175-31b0-4ef0-8c4b-49659aa0fda8%2F/7292b175-31b0-4ef0-8c4b-49659aa0fda8/play_720p.mp4",
    "how": "Sdraiata prona a terra, posiziona la pallina da lacrosse tra l'ombelico e la spina iliaca antero-superiore. Rilassa la muscolatura addominale e respira profondamente permettendo alla pallina di affondare.",
    "feel": "Rilascio profondo dell'ileopsoas e dei flessori dell'anca.",
    "comp": "Non effettuare spinte brusche. Se avverti un battito arterioso pulsante pronunciato, sposta leggermente la pallina."
  },
  "Supine Hip External Rotation Stretch": {
    "name": "Supine Hip External Rotation Stretch",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/be9/be917feb-256f-5395-b7c5-f7dd1aa35911/SMALL/Supine-Hip-External-Rotation-Stretch1.png",
      "https://prod-images.theprehabguys.com/exercises/8ac/8ac773e1-6086-5bdf-a139-ca73d99151cb/SMALL/Supine-Hip-External-Rotation-Stretch2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=4yjUzwUIZe1QB9Zr-rEMsYSiSospZdafP1mcnHFEqS8&expires=1789352089&token_path=%2Fdb63e831-4d14-4816-801e-445caa47f620%2F/db63e831-4d14-4816-801e-445caa47f620/play_720p.mp4",
    "how": "Supina a terra, appoggia la caviglia di una gamba sul ginocchio opposto formando un 4. Afferra la coscia a terra e tirala verso il petto fino ad avvertire tensione nel gluteo.",
    "feel": "Allungamento profondo del piriforme e rotatori esterni dell'anca.",
    "comp": "Non sollevare la testa o l'osso sacro dal pavimento durante la trazione."
  },
  "Supine Hip External Rotation - Band": {
    "name": "Supine Hip External Rotation - Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/d7b/d7bb857c-2573-5271-9006-5c554c558f56/SMALL/Supine-Hip-External-Rotation-Band-1.jpg",
      "https://prod-images.theprehabguys.com/exercises/221/221d9a90-bfbf-5d8e-9e14-1eecab454653/SMALL/Supine-Hip-External-Rotation-Band-2.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=qqoR_2cLCm6Z3P-McfB_M_XNphm826a2j_52MIKiq0o&expires=1789352090&token_path=%2F3f81fc7a-5e06-4d47-92cb-1499baea92dc%2F/3f81fc7a-5e06-4d47-92cb-1499baea92dc/play_720p.mp4",
    "how": "Supina a terra con elastico posizionato attorno ai piedi o ginocchia. Ruota esternamente le anche allontanando le ginocchia e mantenendo la tensione per 2 secondi a fine corsa.",
    "feel": "Attivazione dei rotatori esterni e stabilizzatori dell'anca.",
    "comp": "Non inarcare la zona lombare a terra durante l'apertura delle gambe."
  },
  "Single Leg Short Foot": {
    "name": "Single Leg Short Foot",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/04b/04b31f72-79ec-56b9-b28a-e4d0645514f4/SMALL/Single-Leg-Short-Foot.png",
      "https://prod-images.theprehabguys.com/exercises/9dd/9ddd28a7-58c5-5a93-a1f7-32973a7fce24/SMALL/Single-Leg-Short-Foot.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=8YlzFuDzjs0QTkWMewLTKYvSSYQszTXzJrifcnUhEns&expires=1789352091&token_path=%2F6d91f0cc-863f-44f6-ace3-687e6897a1bd%2F/6d91f0cc-863f-44f6-ace3-687e6897a1bd/play_720p.mp4",
    "how": "In appoggio monopodalico a piedi nudi. 'Accorcia' il piede avvicinando la base del primo metatarso al tallone, sollevando attivamente la volta plantare senza arricciare le dita.",
    "feel": "Contrazione dei muscoli intrinseci del piede e attivazione del tibiale posteriore.",
    "comp": "Non flettere le dita ad artiglio: devono rimanere distese e rilassate a contatto col suolo."
  },
  "Scapula Retraction - Band": {
    "name": "Scapula Retraction - Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/bd1/bd1dd58b-0f5b-5490-b201-c6de3fd6bd26/SMALL/Scapula-Retraction-Band1.png",
      "https://prod-images.theprehabguys.com/exercises/e90/e90e8b4f-543e-5fc3-a5f5-8d15a0927130/SMALL/Scapula-Retraction-Band2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=Xp5Kcu4k3NCp3cHUCRE0ZKNolAqjqJC6L4pC2v6AJSw&expires=1789352092&token_path=%2F6a9c525d-88ed-4d57-b641-c12391b8024b%2F/6a9c525d-88ed-4d57-b641-c12391b8024b/play_720p.mp4",
    "how": "In piedi, impugna un elastico davanti al petto a braccia tese. Separa le mani adducendo le scapole verso la colonna vertebrale mantenendo le braccia dritte.",
    "feel": "Attivazione dei romboidi, trapezio medio e posteriore delle spalle.",
    "comp": "Non alzare le spalle verso il collo e non iperestendere la zona lombare."
  },
  "Push Up Plus - Wall": {
    "name": "Push Up Plus - Wall",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/cfc/cfcd9f23-680b-5cd9-96b7-67b28c0cedcb/SMALL/Push-Up-Plus-Wall1.png",
      "https://prod-images.theprehabguys.com/exercises/f91/f91573c9-3752-5659-9e1f-66124fc82012/SMALL/Push-Up-Plus-Wall2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=0tZBYJbeGn6XWPc8Ap5j7yy_s5dnuzDMoyK_Wzr23PI&expires=1789352093&token_path=%2Ff807fbb7-5c03-4be5-9554-6a6a4d7ed375%2F/f807fbb7-5c03-4be5-9554-6a6a4d7ed375/play_720p.mp4",
    "how": "Mani alla parete a larghezza spalle, braccia completamente tese. Senza piegare i gomiti, allontana il petto dalla parete spingendo le scapole in avanti (pro trazione scapolare), poi ritorna.",
    "feel": "Isolamento e attivazione del dentato anteriore (serratus anterior), fondamentale per la stabilità della spalla.",
    "comp": "Non flettere le braccia: il movimento deve avvenire unicamente attraverso lo scorrimento delle scapole."
  },
  "Single Leg Box Squat": {
    "name": "Single Leg Box Squat",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/86f/86f4044c-1296-5612-b3f6-d6e9571c556f/SMALL/Single-Leg-Box-Squat1.png",
      "https://prod-images.theprehabguys.com/exercises/7c3/7c34d89f-ae3a-5b42-9c91-38e31de44154/SMALL/Single-Leg-Box-Squat2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=UmLwjKltUvN6FcRMM1MKAqPt-oD6i78tRjJss7EpzOo&expires=1789352094&token_path=%2Ff57a60ec-2d6f-4f1d-8166-b9723ef291e2%2F/f57a60ec-2d6f-4f1d-8166-b9723ef291e2/play_720p.mp4",
    "how": "In piedi su una gamba davanti a un box o panca, l'altra sollevata avanti. Scendi in modo controllato fino a sfiorare la panca con i glutei, poi risali spingendo forte dal tallone.",
    "feel": "Forza eccentrica e concentrica di quadricipite, gluteo e stabilità del ginocchio.",
    "comp": "Non far collassare il ginocchio verso l'interno (valgo). Non lasciarsi cadere di peso sul box."
  },
  "Half Kneeling Quadriceps Stretch - Dynamic, Strap": {
    "name": "Half Kneeling Quadriceps Stretch - Dynamic, Strap",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/985/985f8dc3-1876-56d8-886f-8a2c770e389b/SMALL/posttypevimeo-videop22857-vimeo-thumbnail.jpg",
      "https://prod-images.theprehabguys.com/exercises/985/985f8dc3-1876-56d8-886f-8a2c770e389b/SMALL/posttypevimeo-videop22857-vimeo-thumbnail.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=pEeMWiAHP5FxVCsmxqeRsFJuDWyfeVil1omCfHxztJo&expires=1789352095&token_path=%2Fe0978e2e-409d-4b89-b886-b3823495ca0f%2F/e0978e2e-409d-4b89-b886-b3823495ca0f/play_720p.mp4",
    "how": "In ginocchio a terra in mezza flessione (un ginocchio avanti, uno a terra). Con una cinghia o con la mano, fletti la caviglia posteriore verso il gluteo mentre contrai il gluteo ed esegui una retroversione del bacino.",
    "feel": "Allungamento del retto femorale e dei flessori dell'anca.",
    "comp": "Non inarcare la schiena: mantieni il gluteo posteriore contratto e il bacino retroverso."
  },
  "Table Top Hip Internal Rotation Isometric - Wall": {
    "name": "Table Top Hip Internal Rotation Isometric - Wall",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/e23/e23011fb-4dac-5409-a476-24e8ff2b8448/SMALL/41.Table-Top-Hip-Internal-Rotation-Isometric-Wall.jpg",
      "https://prod-images.theprehabguys.com/exercises/40b/40b5e596-89fa-5a29-b41b-8d9119a56cb1/SMALL/42.Table-Top-Hip-Internal-Rotation-Isometric-Wall.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=KdUQihJd1Ida6TiHWMmvn9y-bwv6pRSq1PN2RyLUL5Y&expires=1789352095&token_path=%2Fa149c1c2-f720-478d-b028-492c6f7d19d6%2F/a149c1c2-f720-478d-b028-492c6f7d19d6/play_720p.mp4",
    "how": "Supina a terra con anche e ginocchia a 90° (posizione a tavolino), caviglie esterne contro una parete. Spingi isometricamente i piedi verso l'esterno ruotando internamente le anche contro il muro.",
    "feel": "Attivazione dei rotatori interni dell'anca (tensore della fascia lata, piccolo gluteo).",
    "comp": "Non muovere il bacino, mantieni la zona lombare a contatto con il suolo."
  },
  "Wall Slide - Foam Roller": {
    "name": "Wall Slide - Foam Roller",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/f55/f5577186-5fb9-5b73-8f2a-663c7cb66fc2/SMALL/Wall-Slide-Foam-Roller1.png",
      "https://prod-images.theprehabguys.com/exercises/1b1/1b1415dd-aa00-557d-98fb-460ac53b7676/SMALL/Wall-Slide-Foam-Roller2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=KjTrcFUAmxtRJa9BFyKVLR4e8A2LU7CUWNZ40V_FZU0&expires=1789352096&token_path=%2F45c5a32a-a03c-450b-875e-bafb93e2015e%2F/45c5a32a-a03c-450b-875e-bafb93e2015e/play_720p.mp4",
    "how": "In piedi davanti a una parete con un foam roller posizionato tra gli avambracci e il muro. Fai scivolare il rullo verso l'alto mantenendo una leggera pressione in avanti e allungando le braccia a fine corsa.",
    "feel": "Attivazione del dentato anteriore e rotazione superiore fisiologica della scapola.",
    "comp": "Non inarcare la schiena in alto. Non far cadere i gomiti all'esterno."
  },
  "Isometric Lateral Raise - Band": {
    "name": "Isometric Lateral Raise - Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/c1e/c1e9685d-3573-59fe-a284-4644facf391b/SMALL/Isometric-Lateral-Raise-Band-1.png",
      "https://prod-images.theprehabguys.com/exercises/42c/42c279b7-1d40-56a6-9c79-614cc7bcdc6f/SMALL/Isometric-Lateral-Raise-Band-2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=hiuU0Ej0yzkCwShhwBzsIPmAhPlgaMRWXcmu-_axTKY&expires=1789352097&token_path=%2F42bda629-31bc-48f0-9558-f9b8cdb0bd91%2F/42bda629-31bc-48f0-9558-f9b8cdb0bd91/play_720p.mp4",
    "how": "In piedi sopra un elastico, solleva le braccia lateralmente a circa 75-80° (piano scapolare). Mantieni la tenuta isometrica per il tempo target respirando con regolarità.",
    "feel": "Lavoro isometrico sul deltoide e cuffia dei rotatori senza attrito sub-acromiale.",
    "comp": "Non sollevare le braccia oltre l'orizzontale. Non incassare il collo nelle spalle."
  },
  "Bicep Curl - Band": {
    "name": "Bicep Curl - Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/9c3/9c30e466-641f-54af-bf11-e2739dd8ca72/SMALL/Bicep-Curl-Band1.png",
      "https://prod-images.theprehabguys.com/exercises/396/3967fafd-93da-58e6-a1da-f8264ed153dd/SMALL/Bicep-Curl-Band2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=gF0z_9Cl4OHs4PW_YZhptREdL0PGhsbsS0JMPb75ArY&expires=1789352098&token_path=%2Ff93e113d-0c7e-4880-b0fc-181be725e470%2F/f93e113d-0c7e-4880-b0fc-181be725e470/play_720p.mp4",
    "how": "In piedi su un elastico, gomiti aderenti ai fianchi. Fletti gli avambracci e poi controlla la discesa in fase eccentrica lenta (3 secondi di ritorno).",
    "feel": "Contrazione del bicipite brachiale e brachioradiale, controllo tendineo del gomito.",
    "comp": "Non dondolare con la schiena. Non staccare i gomiti dal busto."
  },
  "Single Arm Tall Plank - Swissball": {
    "name": "Single Arm Tall Plank - Swissball",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/a1e/a1ebb175-0738-5868-bb01-42499887a179/SMALL/Single-Arm-Tall-Plank-Swissball1.png",
      "https://prod-images.theprehabguys.com/exercises/48b/48b21d71-9dca-5583-b91c-0304b50f24dc/SMALL/Single-Arm-Tall-Plank-Swissball2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=l5N0aTS7eq8ovg56Iad-A-IyyZrhLEHiG91oqNIhW08&expires=1789352099&token_path=%2F49ea9f3a-84fe-4e4b-b772-bd7d858b2ef7%2F/49ea9f3a-84fe-4e4b-b772-bd7d858b2ef7/play_720p.mp4",
    "how": "Posizione di plank alto con le mani in appoggio su una fitball. Stacca una mano portandola al petto per qualche secondo, mantenendo il corpo perfettamente bloccato.",
    "feel": "Stabilità estrema anti-rotazionale del core e propriocezione della spalla in appoggio.",
    "comp": "Non far ruotare o basculare il bacino. Allarga i piedi se necessario per aumentare la base d'appoggio."
  },
  "Eccentric Elbow Extension - Band": {
    "name": "Eccentric Elbow Extension - Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/0d1/0d14a81f-7963-5e7a-b599-f9eb8e8fa3e6/SMALL/Eccentric-Elbow-Extension-Band1.png",
      "https://prod-images.theprehabguys.com/exercises/87a/87a553b8-ab00-5a64-a2ea-808d92cc2a93/SMALL/Eccentric-Elbow-Extension-Band2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=JSpbgxQNPkUbykfKmnQrEifgcscvq3RC3eWlRVVD4Cs&expires=1789352099&token_path=%2F19aaefa8-a62d-49f2-bc07-6f8507e1f327%2F/19aaefa8-a62d-49f2-bc07-6f8507e1f327/play_720p.mp4",
    "how": "Elastico ancorato in alto. Estendi il gomito aiutandoti con l'altra mano, poi resisti alla flessione tornando molto lentamente (3-4 secondi di fase eccentrica) con un solo braccio.",
    "feel": "Rinforzo eccentrico del tricipite e protezione tendinea dell'olecrano.",
    "comp": "Non far risalire il braccio di scatto. Movimento fluido e costante."
  },
  "Eccentric Elbow Flexion - Band": {
    "name": "Eccentric Elbow Flexion - Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/9d6/9d6db47f-1d1b-5144-9552-df1914e51272/SMALL/Eccentric-Elbow-Flexion-Band1.png",
      "https://prod-images.theprehabguys.com/exercises/c17/c178e889-9e85-5d2a-8aa9-5f9413c393b5/SMALL/Eccentric-Elbow-Flexion-Band2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=rLqm6yF4eVL6UC2Cs-7mx-R6yZQSTZ5tHkJp0RI_CPA&expires=1789352100&token_path=%2F6fe47e7a-61b5-4883-a22a-ffbf4a8a11b4%2F/6fe47e7a-61b5-4883-a22a-ffbf4a8a11b4/play_720p.mp4",
    "how": "Fletti il gomito con l'aiuto dell'altra mano, poi resisti all'estensione controllando la discesa in 3-4 secondi contro la trazione dell'elastico.",
    "feel": "Lavoro eccentrico del bicipite brachiale e tendine bicipitale.",
    "comp": "Non perdere la tensione a inizio allungamento."
  },
  "Eccentric Elbow Supination - Elbow Straight, Dumbbell, Band": {
    "name": "Eccentric Elbow Supination - Elbow Straight, Dumbbell, Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/20c/20cd6ecd-8955-5ffb-b4e8-83ef8eac97fd/SMALL/Eccentric-Elbow-Supination-Elbow-Straight-Dumbbell-Band.jpg",
      "https://prod-images.theprehabguys.com/exercises/ea9/ea97f4c6-8dd8-5f2e-930b-c0823cb65e08/SMALL/Eccentric-Elbow-Supination-Elbow-Straight-Dumbbell-Band1.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=V7kbZ4woqRkA8rCJhjhzSFmMGzmfutYoS9dYydjJBBw&expires=1789352101&token_path=%2F7ada87c0-478f-40a4-9de1-7cafb7d33917%2F/7ada87c0-478f-40a4-9de1-7cafb7d33917/play_720p.mp4",
    "how": "Braccio disteso in avanti impugnando un manubrio da un'estremità. Lascia che il manubrio ruoti verso l'interno (pronazione) resistendo al movimento in eccentrica, poi riportalo su con l'altra mano.",
    "feel": "Rinforzo specifico dei muscoli supinatori e prevenzione epicondilite ed epitrocleite.",
    "comp": "Non flettere il polso o il gomito durante la decelerazione."
  },
  "Single Leg Calf Raise - Captain Morgan": {
    "name": "Single Leg Calf Raise - Captain Morgan",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/e40/e40a6135-f34b-4d02-8270-bfad5df8374c/SMALL/single-leg-calf-raise-captain-morgan.webp",
      "https://prod-images.theprehabguys.com/exercises/e40/e40a6135-f34b-4d02-8270-bfad5df8374c/SMALL/single-leg-calf-raise-captain-morgan.webp"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=d-BYlsxfGL4ViwFdfWhITtyr8GwT5uvR5pOjJrb8QjE&expires=1789352102&token_path=%2F05cdbde5-b53e-4891-a08f-1039e62126c8%2F/05cdbde5-b53e-4891-a08f-1039e62126c8/play_720p.mp4",
    "how": "In piedi su una gamba vicino a una parete con una fitball tra il ginocchio opposto piegato e il muro. Spingi energicamente il ginocchio contro la palla e contemporaneamente sollevati sulla punta del piede della gamba a terra.",
    "feel": "Lavoro combinato di polpaccio (gastrocnemio/soleo) sulla gamba a terra e medio gluteo sulla gamba che preme la palla.",
    "comp": "Non far cadere la palla. Non piegare il ginocchio della gamba a terra durante la salita sul tallone."
  },
  "Bridge Hold": {
    "name": "Bridge Hold",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/6e3/6e3dbbb6-d374-5a6e-8370-1a2796d379b3/SMALL/Bridge-Hold-1.png",
      "https://prod-images.theprehabguys.com/exercises/e11/e114644b-369f-5635-af71-b068e159a74d/SMALL/Bridge-Hold-2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=ybOSPk4Asc5EyFd5-4cc7ZkAZjQ8zwapimqhBXfGrnY&expires=1789352103&token_path=%2Fdca70478-1a96-4a0f-923a-e903f8ff2296%2F/dca70478-1a96-4a0f-923a-e903f8ff2296/play_720p.mp4",
    "how": "Sdraiata supina con ginocchia flesse e piedi a terra. Solleva il bacino contraendo glutei e addome fino ad allineare cosce e tronco, mantenendo la posizione isometrica.",
    "feel": "Isolamento del grande gluteo, femorali e stabilizzazione lombo-pelvica.",
    "comp": "Non inarcare la schiena spingendo con la zona lombare. Mantieni le costole abbassate."
  },
  "Step Up and Down": {
    "name": "Step Up and Down",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/832/832452f4-556a-5480-9d16-345b7632733b/SMALL/Sumo-Deadlift-Dumbbell1.png",
      "https://prod-images.theprehabguys.com/exercises/e43/e4368e7c-385f-5e21-92db-01b43fa11bb2/SMALL/Sumo-Deadlift-Dumbbell2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=uLdxRI1FeEk1Um52cEy-ZFBvnW9vW064mslvGqbZ-Nw&expires=1789352104&token_path=%2F5b116330-f36d-453c-9565-6b557b4f56f3%2F/5b116330-f36d-453c-9565-6b557b4f56f3/play_720p.mp4",
    "how": "In appoggio monopodalico su un box o gradino (20-30 cm). Spingi attraverso il tallone della gamba sul rialzo estendendo anca e ginocchio senza darti slancio con la gamba a terra. Ritorna in discesa eccentrica controllata (2-3s) sfiorando il pavimento con la punta del piede opposto.",
    "feel": "Attivazione mirata del quadricipite, medio gluteo e stabilità lombo-pelvica della gamba in appoggio.",
    "comp": "Non spingere con la gamba a terra per salire. Mantieni il ginocchio allineato al 2° dito del piede evitando il collasso in valgo e mantieni il bacino livellato."
  },
  "Sumo Deadlift- Dumbbell": {
    "name": "Sumo Deadlift- Dumbbell",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/832/832452f4-556a-5480-9d16-345b7632733b/SMALL/Sumo-Deadlift-Dumbbell1.png",
      "https://prod-images.theprehabguys.com/exercises/e43/e4368e7c-385f-5e21-92db-01b43fa11bb2/SMALL/Sumo-Deadlift-Dumbbell2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=uLdxRI1FeEk1Um52cEy-ZFBvnW9vW064mslvGqbZ-Nw&expires=1789352104&token_path=%2F5b116330-f36d-453c-9565-6b557b4f56f3%2F/5b116330-f36d-453c-9565-6b557b4f56f3/play_720p.mp4",
    "how": "Piedi più larghi delle spalle con punte extra-ruotate a 30-40°. Impugna un manubrio al centro e scendi flettendo anche e ginocchia con busto eretto, risalendo con spinta dai talloni a ritmo lento.",
    "feel": "Adduttori, grande gluteo e quadricipiti con minimo stress sulla colonna lombare.",
    "comp": "Non far collassare le ginocchia all'interno: spingi attivamente le ginocchia verso l'esterno in linea coi piedi."
  },
  "Carry - 90/90, Bottoms Up, Unilateral": {
    "name": "Carry - 90/90, Bottoms Up, Unilateral",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/ffe/ffeb73c5-0924-517f-b3ab-35027a53cb2f/SMALL/Carry-9090-Bottoms-Up-Unilateral-1..png",
      "https://prod-images.theprehabguys.com/exercises/ee3/ee39c026-7d82-5931-ae54-cca009934ca3/SMALL/Carry-9090-Bottoms-Up-Unilateral-2..png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=klDqz5Mjbwxpz_emNUawkeiMnckrXwP8DT8N0OB0XKI&expires=1789352104&token_path=%2Fec91c1db-ef97-4ef7-94f9-282f9df941b9%2F/ec91c1db-ef97-4ef7-94f9-282f9df941b9/play_720p.mp4",
    "how": "In piedi, impugna un kettlebell capovolto (fondo verso l'alto) con gomito e spalla piegati a 90°. Cammina a passi lenti e controllati mantenendo il peso perfettamente stabile.",
    "feel": "Propriocezione e stabilità della cuffia dei rotatori, forza della presa dell'avambraccio e core anti-flessione.",
    "comp": "Non inclinare il busto di lato. Non permettere al kettlebell di oscillare."
  },
  "Pec Minor Soft Tissue Mobilization": {
    "name": "Pec Minor Soft Tissue Mobilization",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/8c3/8c3d2918-fdec-563d-81d4-441fb0df9e24/SMALL/Pec-Minor-Soft-Tissue-Mobilization.jpg",
      "https://prod-images.theprehabguys.com/exercises/511/51109131-208b-5f82-a5c4-ac4d28b77990/SMALL/Pec-Minor-Soft-Tissue-Mobilization1.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=sDXtLViqWr_ndeCekrIUTxUL53et_k9WVHaaiEkTEAI&expires=1789352105&token_path=%2Fb614bcd2-3784-4bb4-ad18-71d59bb93807%2F/b614bcd2-3784-4bb4-ad18-71d59bb93807/play_720p.mp4",
    "how": "Posiziona una pallina da lacrosse sotto la clavicola, nella parte alta del petto verso la spalla (piccolo pettorale). Esegui pressioni circolari rilassando il braccio.",
    "feel": "Decontrazione del piccolo pettorale per correggere l'anteposizione delle spalle e liberare il movimento scapolare.",
    "comp": "Non premere direttamente sulle ossa o sulle articolazioni."
  },
  "Pec and Bicep Stretch": {
    "name": "Pec and Bicep Stretch",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/b8f/b8fa036b-d968-527b-b99d-30a2125d4e5b/SMALL/Pec-and-Bicep-Stretch1.png",
      "https://prod-images.theprehabguys.com/exercises/3dc/3dc9db89-1dd9-5bf6-9dda-c2d94f6a0016/SMALL/Pec-and-Bicep-Stretch2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=moGErip2WU4YFGzwAI015vIKqg0fbSStQ-12WpUJREg&expires=1789352106&token_path=%2F3bfdb17f-1f00-4d6f-84da-371e670b9475%2F/3bfdb17f-1f00-4d6f-84da-371e670b9475/play_720p.mp4",
    "how": "In piedi accanto a una parete o stipite. Appoggia mano e avambraccio a braccio disteso e ruota delicatamente il tronco dalla parte opposta.",
    "feel": "Distensione e apertura del pettorale e del capo lungo del bicipite.",
    "comp": "Non inarcare la colonna lombare per aumentare l'allungamento."
  },
  "Thoracic Spine Extension Mobilization - Foam Roller": {
    "name": "Thoracic Spine Extension Mobilization - Foam Roller",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/0ea/0eaef18b-49c8-5002-b0f8-c8fa16e20b7b/SMALL/Thoracic-Spine-Extension-Mobilization-01.jpg",
      "https://prod-images.theprehabguys.com/exercises/68a/68a14089-b834-5c50-905e-ed3c59a9631c/SMALL/Thoracic-Spine-Extension-Mobilization-02.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=ABaa_ZshKdgCFOsATXdKBd7gBM0_6OeYPKbqBCk5PhI&expires=1789352107&token_path=%2Fe0f57cd5-9de2-4b92-b1fe-09dc871aa248%2F/e0f57cd5-9de2-4b92-b1fe-09dc871aa248/play_720p.mp4",
    "how": "Supina con il foam roller sotto la parte centrale della schiena (tratto dorsale). Mani dietro la nuca a sostegno del collo, estendi delicatamente la colonna sopra il rullo durante l'espirazione.",
    "feel": "Apertura della gabbia toracica e incremento dell'estensione toracica per la postura a muro e in attacco.",
    "comp": "Non posizionare mai il foam roller sotto il tratto lombare (bassa schiena)."
  },
  "Open Book": {
    "name": "Open Book",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/63c/63c2b063-0c4a-5c90-88cc-3e4f721dc1d5/SMALL/Open-Book.jpg",
      "https://prod-images.theprehabguys.com/exercises/33f/33fd84d1-0521-5a49-899b-360b380c6ec6/SMALL/Open-Book-1.jpg"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=pkBfOrSqsrH78vVIKGnaOX1hxN9qCo0790t88lxm9L0&expires=1789352108&token_path=%2Fe5a991fc-e195-4528-99a8-dedccb48e734%2F/e5a991fc-e195-4528-99a8-dedccb48e734/play_720p.mp4",
    "how": "Sul fianco con ginocchia e anche piegate a 90° una sopra l'altra. Braccia tese avanti, apri il braccio superiore descrivendo un arco fino al pavimento dietro di te ruotando il torace.",
    "feel": "Mobilità rotazionale della colonna dorsale e allungamento della catena cinetica anteriore del torace.",
    "comp": "Non far scivolare indietro il bacino o staccare le ginocchia l'una dall'altra."
  },
  "Isometric Sidelying Clam - Band": {
    "name": "Isometric Sidelying Clam - Band",
    "images": [
      "https://prod-images.theprehabguys.com/exercises/d4b/d4b4743a-aba4-5ca3-809e-59640f1b32e1/SMALL/Isometric-Side-Lying-Clam-Band-1.png",
      "https://prod-images.theprehabguys.com/exercises/634/6341f059-b6c9-516c-a740-673c428f1666/SMALL/Isometric-Side-Lying-Clam-Band-2.png"
    ],
    "mp4": "https://videos.theprehabguys.com/bcdn_token=NwUU7Cl_0gBNXShZfLxyBosxBEeu4MoyXctKmN_n50w&expires=1789352109&token_path=%2F5edafe03-77d5-4161-8943-799bfaf410a4%2F/5edafe03-77d5-4161-8943-799bfaf410a4/play_720p.mp4",
    "how": "Sdraiata sul fianco con ginocchia piegate a 90° ed elastico sopra le ginocchia. Apri il ginocchio superiore mantenendo i talloni uniti e tieni la posizione di massima apertura isometrica.",
    "feel": "Forte contrazione e bruciore del medio gluteo e dei rotatori profondi dell'anca.",
    "comp": "Non ruotare il bacino all'indietro per cercare un'apertura maggiore."
  }
};

// Inizializza o recupera lo store persistente locale
function getPrehabProgramsStore() {
  try {
    const saved = (typeof localStorage !== 'undefined') ? localStorage.getItem('mv_prehab_programs_store_v1') : null;
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...PREHAB_DEFAULT_PROGRAMS, ...parsed };
    }
  } catch (e) {
    console.warn('[PrehabDB] Errore lettura localStorage, uso default:', e);
  }
  return { ...PREHAB_DEFAULT_PROGRAMS };
}

function getPrehabAssignments() {
  try {
    const saved = (typeof localStorage !== 'undefined') ? localStorage.getItem('mv_prehab_assignments_v1') : null;
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...PREHAB_ATHLETE_MAP, ...parsed };
    }
  } catch (e) {
    console.warn('[PrehabDB] Errore lettura assegnazioni:', e);
  }
  return { ...PREHAB_ATHLETE_MAP };
}

/**
 * Recupera la seduta prehab attiva per codice permanente (es. 'CBQEN45V')
 */
function getPrehabByCode(code) {
  if (!code) return null;
  const cleanCode = String(code).trim().toUpperCase();
  const assignments = getPrehabAssignments();
  
  // 1. Trova atleta dal codice
  let targetAth = Object.values(assignments).find(a => a.code.toUpperCase() === cleanCode);
  let progId = null;
  if (targetAth) {
    progId = targetAth.programId;
  } else if (PREHAB_CODE_MAP[cleanCode]) {
    progId = PREHAB_CODE_MAP[cleanCode];
    targetAth = Object.values(assignments).find(a => a.programId === progId);
  }

  if (!progId) return null;

  const programs = getPrehabProgramsStore();
  const prog = programs[progId];
  if (!prog) return null;

  return {
    ...prog,
    code: cleanCode,
    athName: targetAth ? targetAth.athName : prog.athName,
    athNum: targetAth ? targetAth.athNum : prog.athNum
  };
}

/**
 * Recupera la seduta prehab attiva per numero di maglia / ID atleta
 */
function getPrehabByAthlete(athNumOrId) {
  const key = String(athNumOrId);
  const assignments = getPrehabAssignments();
  const ath = assignments[key];
  if (!ath) return null;
  return getPrehabByCode(ath.code);
}

/**
 * Salva modifiche a una seduta prehab (dal Cockpit Coach)
 * Il codice permanente dell'atleta NON cambia.
 */
function savePrehabProgram(progId, updatedProg) {
  const store = getPrehabProgramsStore();
  store[progId] = {
    ...(store[progId] || {}),
    ...updatedProg,
    updatedAt: new Date().toISOString()
  };
  try {
    if (typeof localStorage !== 'undefined') localStorage.setItem('mv_prehab_programs_store_v1', JSON.stringify(store));
    console.log('[PrehabDB] Seduta salvata con successo:', progId);
    return true;
  } catch (e) {
    console.error('[PrehabDB] Errore salvataggio seduta:', e);
    return false;
  }
}

/**
 * Assegna una diversa seduta a un'atleta mantenendo il suo codice invariato
 */
function assignPrehabProgramToAthlete(athNum, newProgId) {
  const assignments = getPrehabAssignments();
  const key = String(athNum);
  if (assignments[key]) {
    assignments[key].programId = newProgId;
    try {
      if (typeof localStorage !== 'undefined') localStorage.setItem('mv_prehab_assignments_v1', JSON.stringify(assignments));
      return true;
    } catch (e) {
      console.error('[PrehabDB] Errore salvataggio assegnazione:', e);
      return false;
    }
  }
  return false;
}

// Esportazione per browser e moduli
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    PREHAB_DEFAULT_PROGRAMS,
    PREHAB_ATHLETE_MAP,
    PREHAB_CODE_MAP,
    PREHAB_LIBRARY,
    getPrehabByCode,
    getPrehabByAthlete,
    savePrehabProgram,
    assignPrehabProgramToAthlete
  };
}
