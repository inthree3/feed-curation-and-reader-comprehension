# Survey Ground Truth — Fico Shooting

Factual verification questions used in the survey (Q7–Q16), with correct answers and justifications.  
Used to compute **belief accuracy** and **Brier scores** in all statistical analyses.

---

| Q# | Statement | Answer | Justification |
|----|-----------|--------|---------------|
| Q7 | Robert Fico was shot in Slovakia's capital city, Bratislava. | **False** | The shooting took place in Handlová, not Bratislava. |
| Q8 | The suspect was apprehended at the scene of the shooting. | **True** | Juraj Cintula was detained immediately at the scene. |
| Q9 | Robert Fico was shot five times. | **True** | Established as ground truth within the 24-hour coverage window. |
| Q10 | The shooting took place after a Slovak government cabinet meeting. | **True** | Fico was shot following a cabinet meeting in Handlová. |
| Q11 | Slovak authorities publicly described the attack as politically motivated. | **True** | The Interior Minister publicly stated the attack was politically motivated. |
| Q12 | Robert Fico died from his injuries within 24 hours of the shooting. | **False** | Fico survived, undergoing emergency surgery. |
| Q13 | The suspected shooter was identified as a 71-year-old man. | **True** | Juraj Cintula was 71 years old at the time of the attack. |
| Q14 | The gun used in the attack was legally owned by the suspect. | **True** | Cintula held a valid gun license. |
| Q15 | Both U.S. President Biden and Russian President Putin condemned the attack. | **True** | Biden responded and Putin called the attack heinous. |
| Q16 | Robert Fico had been serving as Prime Minister continuously since 2006. | **False** | Fico served multiple non-consecutive terms with gaps in tenure. |

---

## Scoring Notes

- **Belief Accuracy**: proportion of questions answered correctly (True/False matching ground truth above).
- **Brier Score**: calibration measure combining answer correctness with expressed confidence (0–100 slider, converted to 0–1 probability). Lower is better.
- **NEI responses**: "Not Enough Information" responses are treated as `p = 0.5` (maximal uncertainty) in Brier score calculations — neither rewarded nor heavily penalized.

---

*Event: Attempted assassination of Robert Fico, Prime Minister of Slovakia, May 15, 2024.*  
*Ground truth established based on information available within the 24-hour news coverage window following the event.*
