#%%
import pandas as pd

#%%
df=pd.read_csv("summary_5_files.csv")

print(df.head())
# %%
summary=""
chunk=""

for i in range(len(df.loc[(df.File=="1.txt")])):
    print(len(str(df.loc[i,"Chunk_Text"]).split()))
    chunk =chunk+ str(df.loc[i,"Chunk_Text"])

#%%
print(chunk)



# %%
for i in range(len(df.loc[(df.File=="1.txt")])):
    print(len(str(df.loc[i,"summary"]).split()))
    summary =summary+ str(df.loc[i,"summary"])

print(summary)
# %%
print(len(chunk))
print(len(summary))
# %%
from reportlab.lib.pagesizes import LETTER
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet

# Create a PDF document
pdf_file = "output.pdf"
doc = SimpleDocTemplate(pdf_file, pagesize=LETTER)
styles = getSampleStyleSheet()

# Add content
content = []

# Add headings and paragraphs
content.append(Paragraph("Chunk", styles['Heading1']))   # Heading for Chunk
content.append(Spacer(1, 12))
content.append(Paragraph(chunk, styles['Normal']))        # Chunk paragraph

content.append(Spacer(1, 24))                            # Space between sections

content.append(Paragraph("Summary", styles['Heading1']))  # Heading for Summary
content.append(Spacer(1, 12))
content.append(Paragraph(summary, styles['Normal']))      # Summary paragraph

# Build the PDF
doc.build(content)

# %%
