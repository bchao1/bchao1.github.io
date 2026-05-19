# Where is Spectral Autoregression Going

## Post

There are several works that have shown coarse semantic structures can guide diffusion to achieve better results. Note that this is not the same as conditional generation, as we are interesting in the internal diffusion dynamics of the model itself. 

These works all realize the following observation: the low-frequency components serve as the semantic scaffolding for the denoising process. In Patch Forcing, "easy" patches are denoised faster . These all point to the fact that a "faster" low-frequency component can guide a "slower" high-frequency component, which motivates a frequency-dependent schedule.

All these works implement some flavor of a continuous frequency schedule.


At the end of the day, the underlying idea is the same, that is to have separate schedules for features of the image. Frequency-based decomposition is just one of them. 

## References 
1. [Denoising, Fast and Slow: Difficulty-Aware Adaptive Sampling for Image Generation](https://arxiv.org/pdf/2604.19141)
2. [Spectrally-Guided Diffusion Noise Schedules](https://arxiv.org/pdf/2603.19222)
3. [A Fourier-Space Perspective of Diffusion Models](https://arxiv.org/pdf/2505.11278)
4. [Spectral Analysis of Diffusion Models with Application to Schedule Design](https://openreview.net/pdf?id=ymmY3rrD1t)
5. [FREPix: Frequency-Heterogeneous Flow Matching for Pixel-Space Image Generation](https://arxiv.org/pdf/2605.06421)
6. [Frequency-Aware Flow Matching for High-Quality Image Generation](https://arxiv.org/pdf/2604.15521)
7. [DeCo: Frequency-Decoupled Pixel Diffusion for End-to-End Image Generation](https://arxiv.org/pdf/2511.19365)
8. [Frequency-Forcing](https://arxiv.org/pdf/2604.20902)
9. [Latent-Forcing](https://arxiv.org/pdf/2602.11401)
10. [Flow Along the K-Amplitude for Generative Modeling](https://arxiv.org/pdf/2504.19353)
11. [Shaping Inductive Bias in Diffusion Models through Frequency-based Noise Control](https://arxiv.org/pdf/2502.10236)
12. [Simple Diffusion: End-to-end diffusion for high resolution images](https://proceedings.mlr.press/v202/hoogeboom23a/hoogeboom23a.pdf)
13. [Noise schedules considered harmful](https://sander.ai/2024/06/14/noise-schedules.html)
