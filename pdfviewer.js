import React, { useState, useEffect } from 'react';
import { View, Text, Button, WebView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

const PdfViewerScreen = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });

      if (result.type === 'success') {
        setPdfUri(result.uri);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Load the PDF document in the WebView
  }, [pdfUri]);

  return (
    <View>
      <Text>Pdf Viewer</Text>
      <Button title="Pick PDF" onPress={pickDocument} />
      {pdfUri && <WebView source={{ uri: pdfUri }} style={{ flex: 1 }} />}
    </View>
  );
};

export default PdfViewerScreen;
