import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/producto2-card/producto2-card';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  imports: [ProductoCard,CommonModule,FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {


  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Malbec',
      precio: 25000,
      descripcion: 'Vino tinto premium.',
      imagen: 'vino1.jpg'
    },
    {
      id: 2,
      nombre: 'Cabernet Sauvignon',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 3,
      nombre: 'Chardonnay',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'data:image/webp;base64,UklGRp4UAABXRUJQVlA4IJIUAACQXACdASrnANgAPp1InUqlpCyrqBW7mZATiU3O5u04yUFRzbz+7/p3fYbuUSlB3si+m7cNc61p4MDU7BzVfD/VHtsdqPAOfRuPU5iLW8cb75/1/U0/xPrK9/v949RLpVm2AxuPCDrnmHL3ZAsqTvgyiL60KThmt0X9uMZF+IWM6NvZuwzipluQFXZy27IT1Kb70IMdQmVrpYbKyagSDjz1C/79Sa/graLML85mimJsPZ3NssX2T4+zdg9noohOA1D6ih5zFZYAOK1z/Cn0yIavDQm+iFexqve570f9442P6DxR0NimoNTIHuy8sOpQAET9C/1jzRjigooqHvgCqHBxqjWr2mB2dHwD+RB+tsiQAZ2CyUKCNwTh64bTjYwy1ov730LixSbJhR9B4PRjPTmT3yRvnc9AoD1ijD5YgB7EHYw1gnUxKA5MfuFeyA5nwY1Ix2IPwVO/uu1i3pD4feOKk7P/do4Bb8cAHnK8aXOjxLkcGB9Y6ns+pztBESoD3EwkM6Z7MWIVHJFdvyY+CvZK3SQ/h/F9xOiN4pUf+ejQfR1uuI77hns/bv2yYhKUrI9o6eZvLq4hAF+1bJ5PJhP70CGe+ENXK3s/RVbrLH8/W+PLNCp1eTtrGzpxqPrmR9dNHJ/qfEO8Ca3jZfqaWSJV7AjauS07dptZSOegZGpF14SWKnKbeydcug3PMvmaJOdML74q955nxl497IidwyPkKHQcNIDOlPFkiXLrT1s/kSGZL+r5uT6gJOnARZqL4HCOKPi4CCj/mClVdgdUJeCGfDwT5j9Q8tOCKlCs8tadDo1k7e3R2WQut2KGZjJ6D/wctMvu/1DLEI3upMmx/2+oGVRIQwXXAwHB5wlv2LhXNiN2TM8jN4F9UapXDKjr8nBZAJeD5KSsa3w8lefD/VUgJ6hlUcAOlpvxkb7+W8Jgo/htY9XBdYQ2cgxdX7mhS40Dc4iR2g8KSZt0q2d23gtI2Pr/YFsf61QJQYA3gAD++ILx0Do5WfuzMr70ZXDhyGhEI+qMAe6ZnPZt43E2ny+NOHtUFK3QeDqj+ZuVTFKJVPgbAMlI1ZZP26+5UuUxr/+TzAUP42HUb+SRiAK+3aEU5HAYQMHxDmR7EzVmk++Ucab81gLAKVUDDclWMQaXPido/I1gvyZBNZPqOPp4szwajzKmoKC7ktiggE0OOyn8+zUR1HujQqqQxj4QQYQS9hmGa1geRmNgQHSBuhXq6QPTCMoKk7/xDen0d7ij7yn9MWreyvR58OGPRUXBdZsP5bD0PEPHfjBf3o8XwQt+X8iwIFuVs6Pf7nsQJe1OWuAhOT183++3LBhO/cDewAim8dNw9famaggWS+oe/m1C5Dt+qfSkr/E5WH2kAZYzs2y5OmfZ2A6BFguX+SFNKh/Dm4h1ZR9x9I9Vt8zClgPSf70sA40OEb++nPdXW1ni8/l0l18SjDFbJzsQyVXr75mx7SD2lKXu3TpjLEfqfceZXmzPTrM7OpMiof0FDYrFHGkUOly84iFogYWBNeweE6nqNNCjaD7KKOyZzNZ8yXw146P8srQuVvqfnyPmLiTwuHRQ/6cDL+q4RPazpvrMPW3kKh/wjwWp1Kf2g/VD8dyhPM6ATaG1a3++336uOfAbaQYcHI39ZFtC+1D0nHuJkcEmkgMO70BE2i2a731SoupIsNf170+mtq6Q4/Bf/DrBV72at9xJCLHG56ORhFzSqYR7YsD1PoEus8fyNI6XWAEvDSCfWkuuPfgFQ/SdUt0TO2II2UjScwleR/IwEmfkuW1JUg19uG+Io/f+6dDr3pDWhcb2xiNznm4Y+yfsHhjc3p5hLCJk76IOnhtfRrCk/3hykf8vrFaGfTd10MiL+D6+4NX+fZHb6UFnLsUYYthhAte/vB6fhb1YPKRphJAttSxDwgx6yTpcj/5PBQk2XJggx1NrIj5nHOTc3QLsWLMfx51LO6vlVVYkFyXrHZvaDq4c7VqlaKcrloFs0OUI0+F7A6Mu6ngQoyKki4ohGzEHe7nS1Nx20AZ6XNbiQTxKU0UTO36sHW43UsfiZNPNuEGFW8Vy65S1XA2asYdzLv4VWD6m0HBX8ZTzckaH/iPwynKCjrg6pFgUC4X3YOlpOv2ituukDdXEmckBoW75JnJibQ7dpx/QK3vDppmiEffWRwAuKvGWxzlwxoeaqotw/SOtmAG3U5CYpBN4xnqdj7LL8B9CEEaSOmrVIFAnR1al5Ucy/YeZWsD39dlnXiRdxt0obrker7FlhAS7e5DGS622EJJX9BoH8uv6tuUjyywBG0d8EcexYRHmO4aUXkzdDQd+/q9hkE1QCwv2FKEi/TEaWYhCxUMYM5h1Do5iuyxdsMadsOMZUmYJRU6jKAYQIB6Ls8uMUUaEJHXBP5lBdlHRtE6DoiarxDHFgwshYE1Gc8vcDbire3dvD3GRtVAChLG1yD8/o5vUc/4LOUbvkaILgJYPKwPasRRu0uqJIBuHyyMbeJZFCg5D0OIIzzCNHB1s12h+E5tvshQqDzUkeHYbQUBUo0sLUo+XM1eFSt0vcpsGnwuz1q+eJXk1+bOwAgM8FDICQ+gefljDHFBWVut/E2k0EdUQmfBAObPDkd7MVy6x4HxkiFHsz44dilP9ll8O59KAbJVcG38mEVK3MQWTI8R4q70lTlOybxSxsQfbNFluZz6BnLgd8wch7EeTCpfkg+GA3tZeCWBRWbgp/L8We5bqtGX5YhMC6RijxH6j8Xq5w7Uyrsqs7j+natZrbo71YzH/3NOJf3v5JYioz5wXLbdAKhh3p/caHuyqPTOiZebTjTGEMzvvT+p7Dt0TgBbb1V2M8FDqxB/qMUphT6qmFyXn35KV5N0pgZujVsvK/LvrtLJr1ZzxkmZkr8rSnpDx8ewg8nwNeVZ7Grh1wswRjHlhFGgjsQMkY/xRe8NPW+WQ1tsgIIA92MJZBOs3KuBEl7dBW/S/785JDY1bYRHhm12aQE8+Bs2fq2+wCW95e4qRwnAMddY/kwaY82CzeiBvPTICgEhnNQ6YxeCkkXwEWC57c9SvEjTlm7hcrqyRJ+OPWRc28oNQcbG1Af+XG26TOIqktGZ9ZvQ18T9bQ/mQoXTbxSe47HC7e+9FJbdImLPDMthAoZdTUDl8nthu9/5BVTrIEzmX4Ggoe2f+TWokXD0VKpDQ9niA0DMvU3l0/66UhBSzGMFwP9qKZcUhdKVVh42rSMWwZBOp0L4QaDzA8VeQiRc3kARIgoH8hLt98H9haGz7BX2C91lEZw6Pp+JQwEP1Lq6zZk6D2AChF73mpfCT93DK94/YXChrvVZ2eguVLX0A/x9icdHro+go0MD4OOxFps9cvLZl7e65dnFVN/4IU6DPdORwhepEojj3tt+vvsBjLP4IERHt2zwUDjhtySvEx11buqlVvn2JMkNAosmeYQ+roEX1TmD6+susvvWCm+CatF7vfWyZPUcOYuQPDuugekQxq3Q3yb5bVO6mUbGVRusql8D0oDq2qezbVcRF3mbydOnegfSfgc9u+MufNwjTLTTxr5vIl1YjXatB1YmGj3Lpf+8w5HWn8a3DeDqvaXBRmeBe5kpxhCfySeIU7ADCcI1/v+y8JzQuOPLu7xE+azd6YerSJvvylfSakGN58CFqVOodviaYdiY55C7y3oeKBYqKIzAKYoEWq5f5zmQGvbwZoIEWenxeLWBrljrHDHhAVkAw1FqSwuLlyXc89GZciN+yg6ef6Xgykup1RWJ46QlnW693fKw/eCjVZKlRe4TczvzidnY3qDwyG98nVsfiXFW71QxhMhGmEKGeXaT9q3k3ksYtHTS1TlTx4nCTQvFiHvURT5QTGqhew0fA05SXH4hiHbnlBYNOxTIyh7L6DOmrDzudkB/djXZzD2Ea7xniPZma+/H5gO+FU28bJGCyB79R8wv09M2cPIDiBUcmijcoDyeTzZa2aHnA8ijsamkxqqRNLnjdPE01thfQ6+pJjb4Qc2uGwUh/GSlKJC8rs8kuFIzIvtf9iZaw+aNeSRbD1rZSSkUHP9/yVSbEV+8hhueZ6G4+hUbKcLe/AaCCzI8aiAc157P5fsXXiZkGHr4ynhWQ4fjk0W/f7yvVgcfL8iqHkIbNNxczhN5XgK0j8o6X7Ez9kxDBiGyWC42ple+GZCg7VrWnEyt7ERyCCjWhwx33waprUhO5apQz7tMHBqs+IWs/w+bhggiBJopAVaP2939wO1NxiGg7EK1X3YxPc9jy5i6G9wG5DJpAppbvNQ1oDQkzBESoNe8XISuuK4nP6kD+JijROn9L+Rca9tMQIHBER1ZFNEnt5uR4g8o78O7BRV84VAuQ44CuDhxZ9hI7a1IH1RPBtSeFmsERbZrvQydmbPSEANBvlMDFOdzZ+8cOT7m7jgJ/aSXDQPD+3ciLbEebYCxxOJlPOv4lqYiYtL/1OIzMrWcpgOSIMhXccXBslZDkihcoMaBzuFGE8lq8Je4roM3XBA4Zj5yyI36t1I4ehQnJhy5FmzlbRfrYGXK19zhWoWkgNkoA/ytNbQE+LdC59NHqDOOgBJIYTxRIUYU2OTOKMImJssEb47+hBJlPRWLCxEk48g4GIh/ZWzGjMsuHmP3BiLH6Av8OrUBFVexR+yLSTsX+eRrnfXvZzmRF2DG4IHBQ51BplIKD7hC+BLiLmWOYzxpKYgAnwjP6oPA6zJFsOtiXu1VOXqqizdqTFPe0JQSDBnAkF/oKveM0EAJeb+V8lRmc7/aIuN7j9Wrj4p9/6BFIe4YBQeKIjFZyHWK/h+CSTuRyV+tjzR82/eE4l0q2tUvEUgPVtT3oSJIq0ntbeP2INnZmus9kfSENT89RreJSBAQv8uZtHHZUX49v4VvMeVcp1MACS6P/fBK0U2f/jX8K9hlemKFQWhZJ1WBEExGzNl8dvq939Ct1TMffFFpbIxp1T+A5Sc+t8ta9rIxels8qM4HhV7fb1aLLnqNyY1C3bFf2z02dyHYmIvXk5PYwLhTGDivGgUtILsJIqdfBWypkXI0f7VrcXzo3iBV/LvvbmsAJCZSG1+YGwYQlZvJoDRwH4BDA2+nedXCDuGVz1oqaEHHLmlXecUv9eC5ImXBoA2faQlnpSL9V4g53ElZZkW2EcS/F9ZRzrqIZkmdMCp3kGkcrlFXZlFf/LAYXss5pvTaKMqboIj6Bpuf42ni4bmRZeNcy8+BI2w94ET1NS5wssJB2w0I97H0PTXML/FopeXthvgTtbiByewySGl3yz6WUbARWCFqqrG6XCOdFNl4uHOiu6Enusxjhm8eQqKU73GmdXxC9mxPvxJ6FWiX/ON1EzUmR77VagP0fpfCuvcxB7L01YcvzLXOlAgTk8LwcF2BPOhfpznhTwiASU9gOFDsfggQ1KX+4Vg3eXkmSQDSFe3KOGiMZwwHnvclKzMaBxzxaJ6EprenJI0WRNMZ5DHwY4Bor06NhBug9rnQM1D2CtlEV6SX94vftsSpFuenrO/yCE9icMeWI5DjMdiIvRc/mmRsI10IeMP2tOxNGZ4D4uvXtef3VO/4J/t2PgS+DrfwJPGV+5QaCcGkMUYhAWqgtwfdaFY5HHRF3Bso9s+sYaypFTSOBGzoiY7A8uu1c3fwu/E9tGmjPmVimNhZaykXL6cV0DNlNWiwj08EWkWM65ENm8BiSbxRLnXbs16i/vmYVHzZETZOrDeWqduUj79P3ehOi6jZbMNwUunJDe0l7inj+iRxdPFe6qbhT0SwsXIFCFU3WR2zBmH/mCrbd3HXEbXeyARmivCsJtG5PKVxJH+7hbEZWL8czwPh+o3MT3qivCgexMXWw0c31V6BrB/ROfEwRiOAaJJ88A1lCi2Mz9U3HVUlsnW2sCqzLgsCwcs2q9piz710r3OktS4z16OCEOlmadxH9AISBkAogHXrxQWEtNB8mm1oA14s3f6G+fbn8SBv+b7uUfMyiRb+izVlIUNVs136y4GQISlwd90KAQZKslGr9SNo3fHzyGpf5uXY4iMDosT1+qbZ77iM3uX7lN+GsvVix3XxhV08TKugs9xk4cuQtpofBs5gG0dS0zbal1PEM+e4NkNWQYf+i8/9zup4avg7x/RKTvDE/wV3jmffX9xCs8/blmuQyCjeeZCxHNK8zcA2EvMwWCkItIQURsYUthUn4742fMfy9nXmlQDM8zfywC0rj9uBCu82TD9eJrs8sOIVf2VGTrAhAlxsZ147g4NmB4ANgak95bwNvpSmFOijF/2z+Tc8cIyi799hf9Khh5AEtKQ7L3Dyx6SRBN5+6jB9zyRX7fVxfK83h7X75f4mDTJEzHMsrI0m7pAvVu9qtMmYqLKuV0HXZmvIBZssBLKjYOxxogKG+pc/nTemRxMwOGa8pwm9TZKDHwl5J9zBd+sQZH1Ok0THiONJO5GQsu54dw2Zrq87Tm0P9lKsFod7htezf9yTOnaskI24QGbeykYTrAonOrMGdjbXaxQ3Dzkj8EDiGVtPkuJFxYg+7iK+GBRJUMwHD4fwvQJUE7SSutMH1R4jolwGGk3oVL/C/J6zY+KGp43k7K1InLufAAbBqPGUMscNfjIa/3bEUtuiJEOmzmqAFmayR6ZXG2ifPqRTEKRrJaf+1EWFOQYSqF8Tp1A8Yh75kgE651zgVknCG8+Y4ddVmyqSGnOJmC+I8CoX+vWZ+Q53p2BVaoRwm6yI+kQq/uf2eNZEbPTYcLTqco/YR3PiVBhWS14W/1KY5W7ZiaLH5Oz/8YSPfqDcYp1Kphvcw7w+FDVcOJyYvR3EvqlNIgThmgxeOCLpIILdkJGwPyUs1T4b4asCnqqgKAfDxGCW9LlLcZqRBd8mtx6L8SqIy1lVIkU66Jt7TKnpcGTA9UalEsDQjckV3JZ/TIA4PF22BC5Sig6mgrq+3l7p69EoR1Y5SbA8TpHreAfvAnuZZuSQa3Fnds2HWQa9AbUK7OZmMbFGZeWyqSCMt5coah+mRkqM8cQjG7xg3SFBE3Trn+QFXGIsuIck4hbPeAI621sgA'
    },
    {
      id: 4,
      nombre: 'Merlot',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 5,
      nombre: 'Syrah',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 6,
      nombre: 'Rosado de Malbec',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 7,
      nombre: 'Sauvignon Blanc',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 8,
      nombre: 'Torrontés',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 9,
      nombre: 'Rosado de Pinot Noir',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 10,
      nombre: 'Riesling',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 11,
      nombre: 'Champagne',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    {
      id: 12,
      nombre: 'Chardonnay',
      precio: 32000,
      descripcion: 'Elegante y equilibrado.',
      imagen: 'vino2.jpg'
    },
    

  ];

  onFavorito(producto: Producto){
    alert('Seleccionaste: ' + producto.nombre);
  }
}



