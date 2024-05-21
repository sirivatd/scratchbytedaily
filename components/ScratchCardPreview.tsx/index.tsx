import { Text, View } from "tamagui";
import { Image, Adapt, Button, Input, Label, Popover, XStack, YStack } from "tamagui";
// import placeholderImage from '../../assets/img/placeholder.png';
import ScratchView from "../ScratchView";

const DemoData: Array<ScratchCardCell> = [
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA5FBMVEUAAAD////W1tZRUVH/LFUl9O7/JVE0+vQQ9O3/WHX4dYoABQCj+vcFBQX8/PzHx8fh4eEPZmNrEiMQEBBISEj/Lln39vYn//mL5uP5Tmzb1dVubm6AgIBiYmLr6+uIiIh3d3e1tbUj6OKIFy0OAAAADgzU3NuTk5M2NjYbGxudnZ0WkIwLS0nkJ0zVJUfjJ0zCIUERc3EarqrtZXwkFRkVIyMoKCgJPDpCCxaZGjOpHThNDRkg0s0Ug4AcurbxKlAEHh11FCcHMC8fy8YfBQoyCBFKDRkNVlQVnppkdHjMxcYAFRCTurqhAAAEgUlEQVR4nO2dC1PiSBRGuyExzqxCEENmV55RB3B87y6uDCqO68ru/P//M7dBzBOYWtNckvpOlUUC3dR3qju3g2IiZBS7U2/0+iJ79HuNeseO+YjwbrO1yx30ney2mksM7QPufKlwYC8wLNW5o6VGvZRkWOCOlSqFuOEJd6aUOYka5meGzqmHDdvceTTQDhp2udNooesblrmzaKI8N6xxJ9FG7dWwzR1EG+2Zoc2dQyP21LDBHUMjDWXY5E6hlSYZ5nOlmNMlwyx+FPx5BlLkuc4obNHhjqCZjmhxR9BMS+R5rVA0xIA7gmYGosodQTN9kfXfra0i734AAAAAAAAAAAAAAAAAAAAAAADS4ubLZHK6os1ft8Pbr2tJkz6nI9eyLHdUWdLm64WjONtbW6oUuXNN07Tox71f2GboGDOc2zUmS4kJCbrevUcPlvc9uc05CToPl2fq4XK98d4PjeC2eUUbFc8ixXFSmwfHcIxH2tjL4Ch+o+npjWfb9zSM3nG8jRI8n2+TYrbqzRMN3M18hyasNYo1oSnqT82/aRQv1pQtFU5d073zd69J8SnS5NIJHXuPtJulgnpvmV5k3/0SanEYmKJTzgwjtL/hUP0MC41IMbj2P1P5fAi1IGVjDclS4oYm6Tj0zJjWxeCoUmUxnsOdnCzVmiuqnpGnKnQoXr/t0UrvHEZaPMSf2lyuIoeh4prm6cvr9j/Rg1BxkaUlsRIfQyE8f55SVTGOoq+fZWkMx264rkx5eZuntzSEj9GXnzN1HE7HK3YWo5aMb/R4ZCQtDBdGlmrptNSY13eVMOZs3Vdr/eFeiMNh5s5M1bkofTYMMf0k9aLKDNlEMRJqz2YzsaxtM4GRODcScYbckZNZ/E348eTJSzB0/93yrbbmGOfD54XvxPtt+/ilRN6uQVHzKX3YMrY+iiNF9Vgh1JTd8RuUSgvfiPl/XBcbhpgZBiHD7Z2f65wdw1+CHWEIw7UBQxjCEIb6gSEMYQhD/cAQhjCEoX6aqwO+23ATLmS1X17Br2T4e6iLMvz034pu+0w+cfbtwlI+Tw1jY/jpt+XdbBiuDxjCMC+GoS4ZMyxqWg+LXEIxYAhDGPIDQxjCkB8YwhCG/MAQhjDkB4YwhCE/MIQhDPmBIQxhyA8MYQhDfmAIQxjyA0MYwpAfGMIQhvzAEIYw5AeGMIQhPzCEIQz5gSEMYcgPDGEIQ36KsrQU+cFxnI/fqz5HFrGzvFdpgwzF7nKO/1BUg/xJHK/oxntZTwAAAAAAAAAAAAAAAAAAgNTJ+58/dkWfO4Jm+mLAHUEzPdHgjqCZhmhxR9BMS3S4I2imIzbhuvw6aQqZ71IzkEJ2uUNopUuG+Z6mTTKUeV4vGlIZFrhjaKQwNZQH3Dm00ZYzwxp3EG3UXg1lmTuJJspybpjTFaMrfUPZ5k6jgbYMGso2d57UeRV8M8zdRO3KqGHOyk1Zxg1lqc4dKzXqgZvRBwyltPOx9h+E7ncXMpSyedLjzvdOeieRu91FDJVkp17sV7mD/g+q/WK9E7+Z3w9vYpIzzFkJzgAAAABJRU5ErkJggg==',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA5FBMVEUAAAD////W1tZRUVH/LFUl9O7/JVE0+vQQ9O3/WHX4dYoABQCj+vcFBQX8/PzHx8fh4eEPZmNrEiMQEBBISEj/Lln39vYn//mL5uP5Tmzb1dVubm6AgIBiYmLr6+uIiIh3d3e1tbUj6OKIFy0OAAAADgzU3NuTk5M2NjYbGxudnZ0WkIwLS0nkJ0zVJUfjJ0zCIUERc3EarqrtZXwkFRkVIyMoKCgJPDpCCxaZGjOpHThNDRkg0s0Ug4AcurbxKlAEHh11FCcHMC8fy8YfBQoyCBFKDRkNVlQVnppkdHjMxcYAFRCTurqhAAAEgUlEQVR4nO2dC1PiSBRGuyExzqxCEENmV55RB3B87y6uDCqO68ru/P//M7dBzBOYWtNckvpOlUUC3dR3qju3g2IiZBS7U2/0+iJ79HuNeseO+YjwbrO1yx30ney2mksM7QPufKlwYC8wLNW5o6VGvZRkWOCOlSqFuOEJd6aUOYka5meGzqmHDdvceTTQDhp2udNooesblrmzaKI8N6xxJ9FG7dWwzR1EG+2Zoc2dQyP21LDBHUMjDWXY5E6hlSYZ5nOlmNMlwyx+FPx5BlLkuc4obNHhjqCZjmhxR9BMS+R5rVA0xIA7gmYGosodQTN9kfXfra0i734AAAAAAAAAAAAAAAAAAAAAAADS4ubLZHK6os1ft8Pbr2tJkz6nI9eyLHdUWdLm64WjONtbW6oUuXNN07Tox71f2GboGDOc2zUmS4kJCbrevUcPlvc9uc05CToPl2fq4XK98d4PjeC2eUUbFc8ixXFSmwfHcIxH2tjL4Ch+o+npjWfb9zSM3nG8jRI8n2+TYrbqzRMN3M18hyasNYo1oSnqT82/aRQv1pQtFU5d073zd69J8SnS5NIJHXuPtJulgnpvmV5k3/0SanEYmKJTzgwjtL/hUP0MC41IMbj2P1P5fAi1IGVjDclS4oYm6Tj0zJjWxeCoUmUxnsOdnCzVmiuqnpGnKnQoXr/t0UrvHEZaPMSf2lyuIoeh4prm6cvr9j/Rg1BxkaUlsRIfQyE8f55SVTGOoq+fZWkMx264rkx5eZuntzSEj9GXnzN1HE7HK3YWo5aMb/R4ZCQtDBdGlmrptNSY13eVMOZs3Vdr/eFeiMNh5s5M1bkofTYMMf0k9aLKDNlEMRJqz2YzsaxtM4GRODcScYbckZNZ/E348eTJSzB0/93yrbbmGOfD54XvxPtt+/ilRN6uQVHzKX3YMrY+iiNF9Vgh1JTd8RuUSgvfiPl/XBcbhpgZBiHD7Z2f65wdw1+CHWEIw7UBQxjCEIb6gSEMYQhD/cAQhjCEoX6aqwO+23ATLmS1X17Br2T4e6iLMvz034pu+0w+cfbtwlI+Tw1jY/jpt+XdbBiuDxjCMC+GoS4ZMyxqWg+LXEIxYAhDGPIDQxjCkB8YwhCG/MAQhjDkB4YwhCE/MIQhDPmBIQxhyA8MYQhDfmAIQxjyA0MYwpAfGMIQhvzAEIYw5AeGMIQhPzCEIQz5gSEMYcgPDGEIQ36KsrQU+cFxnI/fqz5HFrGzvFdpgwzF7nKO/1BUg/xJHK/oxntZTwAAAAAAAAAAAAAAAAAAgNTJ+58/dkWfO4Jm+mLAHUEzPdHgjqCZhmhxR9BMS3S4I2imIzbhuvw6aQqZ71IzkEJ2uUNopUuG+Z6mTTKUeV4vGlIZFrhjaKQwNZQH3Dm00ZYzwxp3EG3UXg1lmTuJJspybpjTFaMrfUPZ5k6jgbYMGso2d57UeRV8M8zdRO3KqGHOyk1Zxg1lqc4dKzXqgZvRBwyltPOx9h+E7ncXMpSyedLjzvdOeieRu91FDJVkp17sV7mD/g+q/WK9E7+Z3w9vYpIzzFkJzgAAAABJRU5ErkJggg==',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA5FBMVEUAAAD////W1tZRUVH/LFUl9O7/JVE0+vQQ9O3/WHX4dYoABQCj+vcFBQX8/PzHx8fh4eEPZmNrEiMQEBBISEj/Lln39vYn//mL5uP5Tmzb1dVubm6AgIBiYmLr6+uIiIh3d3e1tbUj6OKIFy0OAAAADgzU3NuTk5M2NjYbGxudnZ0WkIwLS0nkJ0zVJUfjJ0zCIUERc3EarqrtZXwkFRkVIyMoKCgJPDpCCxaZGjOpHThNDRkg0s0Ug4AcurbxKlAEHh11FCcHMC8fy8YfBQoyCBFKDRkNVlQVnppkdHjMxcYAFRCTurqhAAAEgUlEQVR4nO2dC1PiSBRGuyExzqxCEENmV55RB3B87y6uDCqO68ru/P//M7dBzBOYWtNckvpOlUUC3dR3qju3g2IiZBS7U2/0+iJ79HuNeseO+YjwbrO1yx30ney2mksM7QPufKlwYC8wLNW5o6VGvZRkWOCOlSqFuOEJd6aUOYka5meGzqmHDdvceTTQDhp2udNooesblrmzaKI8N6xxJ9FG7dWwzR1EG+2Zoc2dQyP21LDBHUMjDWXY5E6hlSYZ5nOlmNMlwyx+FPx5BlLkuc4obNHhjqCZjmhxR9BMS+R5rVA0xIA7gmYGosodQTN9kfXfra0i734AAAAAAAAAAAAAAAAAAAAAAADS4ubLZHK6os1ft8Pbr2tJkz6nI9eyLHdUWdLm64WjONtbW6oUuXNN07Tox71f2GboGDOc2zUmS4kJCbrevUcPlvc9uc05CToPl2fq4XK98d4PjeC2eUUbFc8ixXFSmwfHcIxH2tjL4Ch+o+npjWfb9zSM3nG8jRI8n2+TYrbqzRMN3M18hyasNYo1oSnqT82/aRQv1pQtFU5d073zd69J8SnS5NIJHXuPtJulgnpvmV5k3/0SanEYmKJTzgwjtL/hUP0MC41IMbj2P1P5fAi1IGVjDclS4oYm6Tj0zJjWxeCoUmUxnsOdnCzVmiuqnpGnKnQoXr/t0UrvHEZaPMSf2lyuIoeh4prm6cvr9j/Rg1BxkaUlsRIfQyE8f55SVTGOoq+fZWkMx264rkx5eZuntzSEj9GXnzN1HE7HK3YWo5aMb/R4ZCQtDBdGlmrptNSY13eVMOZs3Vdr/eFeiMNh5s5M1bkofTYMMf0k9aLKDNlEMRJqz2YzsaxtM4GRODcScYbckZNZ/E348eTJSzB0/93yrbbmGOfD54XvxPtt+/ilRN6uQVHzKX3YMrY+iiNF9Vgh1JTd8RuUSgvfiPl/XBcbhpgZBiHD7Z2f65wdw1+CHWEIw7UBQxjCEIb6gSEMYQhD/cAQhjCEoX6aqwO+23ATLmS1X17Br2T4e6iLMvz034pu+0w+cfbtwlI+Tw1jY/jpt+XdbBiuDxjCMC+GoS4ZMyxqWg+LXEIxYAhDGPIDQxjCkB8YwhCG/MAQhjDkB4YwhCE/MIQhDPmBIQxhyA8MYQhDfmAIQxjyA0MYwpAfGMIQhvzAEIYw5AeGMIQhPzCEIQz5gSEMYcgPDGEIQ36KsrQU+cFxnI/fqz5HFrGzvFdpgwzF7nKO/1BUg/xJHK/oxntZTwAAAAAAAAAAAAAAAAAAgNTJ+58/dkWfO4Jm+mLAHUEzPdHgjqCZhmhxR9BMS3S4I2imIzbhuvw6aQqZ71IzkEJ2uUNopUuG+Z6mTTKUeV4vGlIZFrhjaKQwNZQH3Dm00ZYzwxp3EG3UXg1lmTuJJspybpjTFaMrfUPZ5k6jgbYMGso2d57UeRV8M8zdRO3KqGHOyk1Zxg1lqc4dKzXqgZvRBwyltPOx9h+E7ncXMpSyedLjzvdOeieRu91FDJVkp17sV7mD/g+q/WK9E7+Z3w9vYpIzzFkJzgAAAABJRU5ErkJggg==',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
    {
        image: 'https://picsum.photos/200/300',
        isHidden: true,
        isSelected: false,
    },
];

const ScratchCardPreview = () => {
    return (

           <View style={{ padding: 15 }}>
           <Text style={{ marginBottom: 15 }}>Scratch card</Text>
           <View style={{ backgroundColor: 'red', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around',height: 300, opacity: 0.5 }}>
          {DemoData.map((cell, index) => (
            <View key={index} style={{ width: 60, height: 60, backgroundColor: 'blue', margin: 10 }} onTouchEndCapture={() => console.log(index + " index pressed")}>
              <Image source={{ uri: cell.image }} style={{ width: '100%', height: '100%' }} />
            </View>
            ))}
           </View>
           </View>

              )
}

export default ScratchCardPreview;
