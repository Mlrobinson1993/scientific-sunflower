---
title: Home
sections:
  - type: heroblock
    title: 'Hi, I''m Stackbit Exto Portfolio Theme.'
    section_id: hero
    component: HeroBlock
    content: >-
      This section can contain a subtitle or tagline. The recommended length is
      one to three sentences, but can be changed as you prefer.
  - view_all_text: View All
    num_projects_displayed: 6
    section_id: latest-projects
    view_all_url: portfolio/index.html
    subtitle: An optional subtitle of the section
    title: Recent Work
    type: portfolioblock
    layout_style: mosaic
    component: PortfolioBlock
  - type: servicesblock
    title: What We Do
    section_id: services
    component: ServicesBlock
    subtitle: An optional subtitle of the section
    serviceslist:
      - title: Service Title
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla, fringilla tortor at, pulvinar orci.
      - title: Service Title
        content: >-
          Donec lobortis velit sed suscipit lobortis. Ut non quam metus. Nullam
          a maximus mi. Quisque justo nunc, sollicitudin euismod euismod at,
          tincidunt ut tellus. Vivamus rhoncus mattis varius. 
      - title: Service title
        content: >-
          Vestibulum a nunc ut eros condimentum posuere. Nullam dapibus quis
          nunc non interdum. Pellentesque tortor ligula, gravida ac commodo eu.
      - title: Service title
        content: >-
          Aliquam pulvinar, orci ac scelerisque tempus, felis leo sagittis
          justo, sit amet condimentum lorem nibh vel quam. Duis consectetur
          lorem ipsum, non efficitur urna viverra et.
  - type: testimonialsblock
    title: Testimonials
    section_id: testimonials
    component: TestimonialsBlock
    subtitle: An optional subtitle of the section
    testimonialslist:
      - author: Paul Read
        avatar: ''
        content: >-
          From idea to completion, the whole process was so easy. It was a
          pleasure to work with Mike and have him on board.
      - author: Jane Roe
        avatar: images/jane_roe.jpg
        content: >-
          Sed laoreet magna commodo libero euismod sodales. Nunc ac libero
          convallis, interdum ligula vel, pretium diam. Integer commodo sem at
          dui sollicitudin, vel posuere justo laoreet.
  - type: postsblock
    title: Latest from the Blog
    section_id: latest-posts
    component: PostsBlock
    subtitle: An optional subtitle of the section
    num_posts_displayed: 2
    actions:
      - label: View Blog
        url: blog/index.html
menus:
  main:
    title: Home
    weight: 1
template: home
---
